import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {

  const body = await req.json()

  const payload = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: body.page_url,
        event_id: body.event_id,

        user_data: {
          em: body.email ? [body.email] : [],
          ph: body.phone ? [body.phone] : [],
          fbp: body.fbp,
          fbc: body.fbc,
          client_ip_address:
            req.headers.get('x-forwarded-for') ?? undefined,
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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  )

  const data = await response.json()

  return NextResponse.json(data)

}
