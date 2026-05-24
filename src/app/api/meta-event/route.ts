import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

// Meta CAPI requires SHA-256 hashed PII — never send raw email/phone
function sha256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

export async function POST(req: NextRequest) {
  const body = await req.json()

  const payload = {
    data: [
      {
        event_name: body.event_name ?? 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: body.page_url,
        event_id: body.event_id,

        user_data: {
          // Hash PII before sending to Meta
          em: body.email ? [sha256(body.email)] : [],
          ph: body.phone
            ? [sha256(body.phone.replace(/\s/g, ''))]
            : [],
          fbp: body.fbp ?? undefined,
          fbc: body.fbc ?? undefined,
          client_ip_address:
            req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? undefined,
          client_user_agent:
            req.headers.get('user-agent') ?? undefined
        }
      }
    ]
  }

  const response = await fetch(
    `https://graph.facebook.com/v23.0/${process.env.META_PIXEL_ID}/events?access_token=${process.env.META_ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  )

  const data = await response.json()
  return NextResponse.json(data)
}
