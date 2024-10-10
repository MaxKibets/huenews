import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("MIDDLEWARE", request);

  return NextResponse.next();
}
