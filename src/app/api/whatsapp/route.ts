import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {

  const body = await req.json()

  const response = await fetch(
    `https://graph.facebook.com/v23.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: body.phone,
        type: 'text',
        text: {
          body:
`Hi ${body.name},

Thank you for contacting mikdigital.

Your inquiry has been received successfully.

How can I help you further?

— mikdigital`
        }
      })
    }
  )

  const data = await response.json()

  return NextResponse.json(data)

}
