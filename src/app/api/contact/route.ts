import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  market?: string;
  message?: string;
};

const markets: Record<string, string> = {
  RI: "Rhode Island",
  CT: "Connecticut",
  MA: "Massachusetts",
  Multi: "Multi-state / New England",
};

function clip(value: string, max: number) {
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clip(body.name?.trim() ?? "", 256);
  const email = clip(body.email?.trim() ?? "", 256);
  const message = clip(body.message?.trim() ?? "", 1024);
  const business = clip(body.business?.trim() || "Not provided", 256);
  const phone = clip(body.phone?.trim() || "Not provided", 64);
  const marketCode = body.market?.trim() || "";
  const market = markets[marketCode] ?? (marketCode || "Not provided");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const webhook = process.env.DISCORD_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  const discordRes = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "Ocean State Marketing",
      allowed_mentions: { parse: [] },
      embeds: [
        {
          title: "New free quote request",
          color: 0x22d3ee,
          timestamp: new Date().toISOString(),
          fields: [
            { name: "Name", value: name, inline: true },
            { name: "Business", value: business, inline: true },
            { name: "Email", value: email, inline: true },
            { name: "Phone", value: phone, inline: true },
            { name: "Market", value: market, inline: true },
            { name: "Request", value: message, inline: false },
          ],
          footer: { text: "oceanstatemarketing.com · Contact form" },
        },
      ],
    }),
  });

  if (!discordRes.ok) {
    return NextResponse.json({ error: "Could not deliver your request. Try again or call us." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
