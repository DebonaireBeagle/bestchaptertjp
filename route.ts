import { NextRequest, NextResponse } from "next/server";

// TODO(phase 2): this powers the "single user profile" mechanic from the
// strategy doc — every cluster writes signals here (interests, life
// events, tools used), and the home/dashboard pages read from it to
// re-rank recommendations across all three clusters, not just the one
// the user is currently in. Needs Supabase auth + a `profiles` table
// before this can do anything real.
export async function POST(req: NextRequest) {
  const body = await req.json();

  return NextResponse.json({
    saved: false,
    receivedSignal: body,
    note: "stub response — wire up Supabase profile writes here",
  });
}
