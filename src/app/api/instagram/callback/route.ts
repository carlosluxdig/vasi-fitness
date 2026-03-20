import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const clientId = process.env.INSTAGRAM_APP_ID!;
  const clientSecret = process.env.INSTAGRAM_APP_SECRET!;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI!;

  try {
    // Step 1: Exchange code for short-lived token
    const tokenRes = await fetch("https://api.instagram.com/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
        code,
      }),
    });

    if (!tokenRes.ok) {
      const err = await tokenRes.text();
      return NextResponse.json({ error: "Token exchange failed", details: err }, { status: 500 });
    }

    const { access_token: shortToken } = await tokenRes.json();

    // Step 2: Exchange short-lived token for long-lived token (60 days)
    const longRes = await fetch(
      `https://graph.instagram.com/access_token` +
        `?grant_type=ig_exchange_token` +
        `&client_secret=${clientSecret}` +
        `&access_token=${shortToken}`
    );

    if (!longRes.ok) {
      const err = await longRes.text();
      return NextResponse.json({ error: "Long-lived token exchange failed", details: err }, { status: 500 });
    }

    const { access_token: longToken, expires_in } = await longRes.json();

    // Return a setup page with the token and instructions
    const expiresDate = new Date(Date.now() + expires_in * 1000).toLocaleDateString();

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Instagram Connected</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #f5f0eb; color: #2d2d2d; padding: 2rem; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
    .card { background: white; border-radius: 1.5rem; padding: 2.5rem; max-width: 600px; width: 100%; box-shadow: 0 4px 24px rgba(0,0,0,0.06); }
    h1 { color: #c4728f; font-size: 1.5rem; margin-bottom: 1rem; }
    .success { background: #f0fdf4; border: 1px solid #86efac; border-radius: 0.75rem; padding: 1rem; margin-bottom: 1.5rem; color: #166534; }
    .token-box { background: #f9f5f1; border: 1px solid #e5e0db; border-radius: 0.75rem; padding: 1rem; margin: 1rem 0; word-break: break-all; font-family: monospace; font-size: 0.8rem; max-height: 120px; overflow-y: auto; }
    .steps { margin: 1.5rem 0; }
    .steps li { margin: 0.75rem 0; line-height: 1.5; }
    .note { background: #fef3c7; border: 1px solid #fcd34d; border-radius: 0.75rem; padding: 1rem; margin-top: 1rem; font-size: 0.9rem; color: #92400e; }
    code { background: #f3e8ee; padding: 0.15rem 0.4rem; border-radius: 0.25rem; font-size: 0.85rem; }
    button { background: #c4728f; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 0.5rem; cursor: pointer; font-size: 0.9rem; margin-top: 0.5rem; }
    button:hover { background: #a85c78; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Instagram Connected Successfully</h1>
    <div class="success">Vasi's Instagram account has been authorized.</div>

    <p><strong>Long-lived access token</strong> (valid until ${expiresDate}):</p>
    <div class="token-box" id="token">${longToken}</div>
    <button onclick="navigator.clipboard.writeText(document.getElementById('token').textContent).then(()=>this.textContent='Copied!')">Copy Token</button>

    <ol class="steps">
      <li>Copy the token above</li>
      <li>Go to your <strong>Vercel project settings</strong> &rarr; Environment Variables</li>
      <li>Add variable: <code>INSTAGRAM_ACCESS_TOKEN</code> with the token value</li>
      <li>Redeploy the site</li>
    </ol>

    <div class="note">
      <strong>Token refresh:</strong> This token expires in ~60 days. The site includes an auto-refresh cron at <code>/api/instagram/refresh</code>.
      Set up a Vercel Cron to call it weekly, or Vasi can re-authorize by visiting <code>/api/instagram/auth</code> again.
    </div>
  </div>
</body>
</html>`;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (e) {
    console.error("Instagram callback error:", e);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}
