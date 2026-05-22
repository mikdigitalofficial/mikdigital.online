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
            Last_Name: body.name,
            Email: body.email,
            Phone: body.phone,
            Lead_Source: 'Web Site',
            Lead_Status: 'Not Contacted'
          }
        ]
      })
    }
  )

  const data = await zohoResponse.json()

  await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/whatsapp`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone: body.phone
      })
    }
  )

  return NextResponse.json(data)

}
