import type { NextFetchEvent } from "next/server";
import type { NextRequest } from "next/server";

export type Middleware = (
  request: NextRequest,
  event: NextFetchEvent
) => Promise<Response | undefined> | Response | undefined;

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    // This logic is only applied to /about
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // This logic is only applied to /dashboard
  }

  console.log("sdsfsdfsdfsdd");
}
