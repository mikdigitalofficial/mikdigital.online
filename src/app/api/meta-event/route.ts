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
      }
    }

    const response = await fetch(
      `https://graph.facebook.com/v19.0/1303661508025094/events?access_token=${process.env.META_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [eventData] }),
      }
    )

    const data = await response.json()
    return NextResponse.json(data)

  } catch {
    return NextResponse.json({ error: true })
  }
}
