import { NextRequest, NextResponse } from "next/server";

// TODO(phase 2): this is the highest-leverage AI endpoint per the strategy
// doc — asking 2-3 clarifying questions before handing a user off to a
// paid partner (care agency, mover, Medicare broker) directly raises what
// partners will pay per lead. Wire up:
//   1. Anthropic API call to generate/interpret clarifying questions
//   2. A write to the leads table (Supabase) once qualified
//   3. The actual partner handoff (webhook, email, or affiliate redirect)
export async function POST(req: NextRequest) {
  const body = await req.json();

  return NextResponse.json({
    qualified: false,
    followUpQuestions: [],
    receivedInput: body,
    note: "stub response — wire up lead qualification logic here",
  });
}
