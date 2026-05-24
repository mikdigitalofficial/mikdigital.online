import { NextRequest, NextResponse } from 'next/server'

async function getAccessToken() {
  const response = await fetch(
    'https://accounts.zoho.in/oauth/v2/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
        client_id: process.env.ZOHO_CLIENT_ID!,
        client_secret: process.env.ZOHO_CLIENT_SECRET!,
        grant_type: 'refresh_token'
      })
    }
  )
  const data = await response.json()
  return data.access_token
}

export async function POST(req: NextRequest) {
  const body = await req.json()

  const { name, email, phone } = body

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Normalize phone to E.164 — strip spaces/dashes, prepend + if missing
  const normalizedPhone = phone.trim().startsWith('+')
    ? phone.trim().replace(/[\s\-]/g, '')
    : '+' + phone.trim().replace(/[\s\-]/g, '')

  const accessToken = await getAccessToken()

  const zohoResponse = await fetch(
    'https://www.zohoapis.in/crm/v2/Leads',
    {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
            Last_Name: name,
            Email: email,
            Phone: normalizedPhone,
            Lead_Source: 'Web Site',
            Lead_Status: 'Not Contacted'
          }
        ]
      })
    }
  )

  const data = await zohoResponse.json()

  // FIX: pass name so WhatsApp greeting works
  await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/whatsapp`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone: normalizedPhone })
    }
  )

  return NextResponse.json(data)
}
