import { NextResponse } from "next/server";

// Refreshes the long-lived Instagram token.
// Long-lived tokens can be refreshed if they are at least 24 hours old and not expired.
// Call this via Vercel Cron weekly to keep the token alive.
export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ error: "No token configured" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/refresh_access_token` +
        `?grant_type=ig_refresh_token` +
        `&access_token=${token}`
    );

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: "Refresh failed", details: err }, { status: 500 });
    }

    const data = await res.json();

    // Note: The new token is returned but we can't update env vars programmatically.
    // In production, you'd store this in a database or KV store.
    // For now, log it and return it.
    console.log("Instagram token refreshed. New expiry:", new Date(Date.now() + data.expires_in * 1000));

    return NextResponse.json({
      success: true,
      expires_in: data.expires_in,
      message: "Token refreshed. Update INSTAGRAM_ACCESS_TOKEN in Vercel if needed.",
      new_token: data.access_token,
    });
  } catch (e) {
    console.error("Token refresh error:", e);
    return NextResponse.json({ error: "Refresh failed" }, { status: 500 });
  }
}
