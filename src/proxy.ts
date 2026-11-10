import { NextResponse, userAgent, type NextRequest } from "next/server";
import { getApp } from "@/apps";

/**
 * Invite links (`/encore?utm_source=invite`, shared from inside the app) skip the
 * product page on a phone and go straight to that phone's store. Desktops, link
 * previews and platforms without a store listing yet fall through to the page.
 */
export function proxy(request: NextRequest) {
  const app = getApp(request.nextUrl.pathname.slice(1));
  if (!app) return NextResponse.next();

  const { os, isBot } = userAgent(request);
  if (isBot) return NextResponse.next();

  const store =
    os.name === "Android" ? playWithReferrer(app.play, request.nextUrl.searchParams)
    : os.name === "iOS" ? app.appStore
    : "";
  return store ? NextResponse.redirect(store) : NextResponse.next();
}

/**
 * The Play link with the invite's utm_* tags as its install referrer, replacing the
 * site's own, so the app's install attribution reports the invite channel.
 */
function playWithReferrer(play: string | undefined, params: URLSearchParams): string {
  if (!play) return "";
  const utm = new URLSearchParams(
    [...params].filter(([key]) => key.startsWith("utm_")),
  );
  const url = new URL(play);
  url.searchParams.set("referrer", utm.toString());
  return url.toString();
}

export const config = {
  matcher: [
    {
      source: "/:app",
      has: [{ type: "query", key: "utm_source", value: "invite" }],
    },
  ],
};
