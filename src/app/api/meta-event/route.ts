import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();

  await fetch(
    "https://graph.facebook.com/v19.0/1303661508025094/events?access_token=EAAJzWX6k1VEBRa5mKpnj7wrVqbJSKUSzyZCTFfBLyYZBo6cq72lZAZASGGTBwLyKDoINnZBMHLxDtP2s1at4c8dWmjVD56VZCfjIZAAIfxMsnYNhcJhgdHS7mxiymPbvUNFHn7KqVwywHGZBe4hxUBSxnYKeFhiO5rrrtwmEwalOcvEcwvZCeROFq11f2vbBIGwBtlwZDZD",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        data: [
          {
            event_name: body.event_name,

            event_time: Math.floor(Date.now() / 1000),

            action_source: "website",

            event_source_url: body.url,
          },
        ],
      }),
    }
  );

  return NextResponse.json({
    success: true,
  });

}
