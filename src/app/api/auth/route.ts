import { NextResponse } from 'next/server'

export async function GET() {
  const clientId = process.env.ZOHO_CLIENT_ID
  const redirectUri = process.env.ZOHO_REDIRECT_URI // set this in Netlify env vars

  const scope = 'ZohoCRM.modules.ALL,ZohoCRM.settings.ALL'

  const authUrl = `https://accounts.zoho.in/oauth/v2/auth?scope=${scope}&client_id=${clientId}&response_type=code&access_type=offline&redirect_uri=${encodeURIComponent(redirectUri!)}`

  return NextResponse.redirect(authUrl)
}
