import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const response = await fetch(
      "https://graph.facebook.com/v19.0/1303661508025094/events?access_token=YOUR_TOKEN",
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

    const data = await response.json();

    return NextResponse.json(data);

  } catch (error) {

    return NextResponse.json({
      error: true,
    });

  }

}
