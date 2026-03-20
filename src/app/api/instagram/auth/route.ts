import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.INSTAGRAM_APP_ID;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: "INSTAGRAM_APP_ID and INSTAGRAM_REDIRECT_URI must be set in environment variables" },
      { status: 500 }
    );
  }

  const authUrl =
    `https://api.instagram.com/oauth/authorize` +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=instagram_business_basic` +
    `&response_type=code`;

  return NextResponse.redirect(authUrl);
}
