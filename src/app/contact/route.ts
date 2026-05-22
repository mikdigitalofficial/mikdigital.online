// src/app/api/contact/route.ts
import { NextResponse, type NextRequest } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { rateLimit } from "@/lib/security/rate-limit";

async function getAccessToken() {
  const response = await fetch('https://accounts.zoho.in/oauth/v2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      grant_type: 'refresh_token'
    })
  })
  const data = await response.json()
  return data.access_token
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limit = Number(process.env.CONTACT_RATE_LIMIT_MAX ?? 5);
  const windowMs = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 60_000);
  const rate = rateLimit(ip, limit, windowMs);

  if (!rate.ok) {
    return NextResponse.json({ ok: false, error: "Too many requests." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Please check the form fields." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true }); // honeypot
  }

  // ✅ Push to Zoho CRM
  const accessToken = await getAccessToken()

  await fetch('https://www.zohoapis.in/crm/v2/Leads', {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: [{
        Last_Name: parsed.data.name,
        Email: parsed.data.email,
        Phone: parsed.data.phone ?? '',
        Lead_Source: 'Website',
        Description: parsed.data.message ?? ''
      }]
    })
  })

  return NextResponse.json({ ok: true, message: "Message received!" });
}
