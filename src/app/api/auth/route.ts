import { NextResponse } from 'next/server'

export async function GET() {

const clientId = process.env.ZOHO_CLIENT_ID
const redirectUri = 'https://www.mikdigital.online/api/auth/callback'

const scope =
'ZohoCRM.modules.ALL,ZohoCRM.settings.ALL'

const authUrl =
`https://accounts.zoho.com/oauth/v2/auth?scope=${scope}&client_id=${clientId}&response_type=code&access_type=offline&redirect_uri=${redirectUri}`

return NextResponse.redirect(authUrl)

}
