import { NextRequest, NextResponse } from "next/server";

// TODO(phase 2): replace this stub with a real call to the Anthropic API.
// Input: the user's free-text or multiple-choice quiz answers.
// Output: a primary cluster + 1-2 secondary cluster suggestions, per the
// "Flow 1" personalization logic in the strategy doc — this is what lets
// quiz answers map to more than a single hardcoded cluster.
//
// Keep the ANTHROPIC_API_KEY server-side only (env var, never exposed to
// the client) — that's the whole reason this lives in a Route Handler
// instead of being called directly from app/quiz/page.tsx.
export async function POST(req: NextRequest) {
  const body = await req.json();

  // Placeholder logic until the real model call is added.
  return NextResponse.json({
    primaryCluster: "discovery-and-purpose",
    secondaryClusters: [],
    receivedAnswers: body,
    note: "stub response — wire up the Anthropic API call here",
  });
}
