import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code') // ← THIS was missing!

  if (!code) {
    return NextResponse.json({ error: 'No code received' }, { status: 400 })
  }

  const redirectUri = process.env.ZOHO_REDIRECT_URI

  const response = await fetch('https://accounts.zoho.in/oauth/v2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,                                          // ← exchange the code
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      redirect_uri: redirectUri!,
      grant_type: 'authorization_code',             // ← not refresh_token
    }),
  })

  const data = await response.json()

  // Save tokens as needed, then redirect
  return NextResponse.json(data)
}
