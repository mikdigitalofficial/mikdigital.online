import { NextResponse } from 'next/server'
import { createHash } from 'crypto'

function hash(value: string) {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const eventData: Record<string, unknown> = {
      event_name: body.event_name,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: body.url,
  user_data: {
  ...(body.email && { em: hash(body.email) }),
  ...(body.phone && { ph: hash(body.phone) }),
  ...(body.fbc && { fbc: body.fbc }),     // ← not hashed
  ...(body.fbp && { fbp: body.fbp }),     // ← not hashed
  client_ip_address: req.headers.get('x-forwarded-for')?.split(',')[0] ?? undefined,
  client_user_agent: req.headers.get('user-agent') ?? undefined,
}

    const response = await fetch(
      `https://graph.facebook.com/v19.0/1303661508025094/events?access_token=${process.env.META_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [eventData],
          test_event_code: process.env.META_TEST_EVENT_CODE
        }),
      }
    )

    const data = await response.json()
    console.log('Meta API response:', JSON.stringify(data))
    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('Meta API error:', err)
    return NextResponse.json({ error: true })
  }
}
