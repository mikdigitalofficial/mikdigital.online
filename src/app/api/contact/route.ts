import { NextResponse, type NextRequest } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { rateLimit } from "@/lib/security/rate-limit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limit = Number(process.env.CONTACT_RATE_LIMIT_MAX ?? 5);
  const windowMs = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 60_000);
  const rate = rateLimit(ip, limit, windowMs);

  if (!rate.ok) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Please check the form fields and try again." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({
    ok: true,
    message: "Request received. Wire this route to your CRM, email provider, or Netlify Function queue in production."
  });
}
