import { NextResponse } from "next/server";

export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

// In-memory cache (persists across requests in the same serverless invocation)
let cache: { data: InstagramPost[]; timestamp: number } | null = null;
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { posts: [], error: "not_configured" },
      { status: 200 }
    );
  }

  // Return cached data if fresh
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return NextResponse.json({ posts: cache.data });
  }

  try {
    const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=12&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      const err = await res.json();
      // Token expired
      if (err.error?.code === 190) {
        return NextResponse.json(
          { posts: [], error: "token_expired" },
          { status: 200 }
        );
      }
      throw new Error(err.error?.message || "Instagram API error");
    }

    const json = await res.json();
    const posts: InstagramPost[] = (json.data || []).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (p: any) => ({
        id: p.id,
        caption: p.caption,
        media_type: p.media_type,
        media_url: p.media_url,
        thumbnail_url: p.thumbnail_url,
        permalink: p.permalink,
        timestamp: p.timestamp,
      })
    );

    cache = { data: posts, timestamp: Date.now() };
    return NextResponse.json({ posts });
  } catch (e) {
    console.error("Instagram fetch error:", e);
    // Return cached data even if stale, or empty
    if (cache) {
      return NextResponse.json({ posts: cache.data, stale: true });
    }
    return NextResponse.json({ posts: [], error: "fetch_failed" }, { status: 200 });
  }
}
