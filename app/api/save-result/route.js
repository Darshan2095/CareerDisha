import { NextResponse } from "next/server";
import { connectToDatabase } from "../_lib/db";
import QuizResult from "../_lib/models/QuizResult";

export async function POST(req) {
  try {
    const body = await req.json();
    const { session, stream, branch, interestAnswers, aptAnswers, interestScore, aptitudeScore, totalScore } = body;
    if (!session || !stream || !branch) return NextResponse.json({ error: "Missing session/stream/branch" }, { status: 400 });
    if (!interestAnswers || !aptAnswers) return NextResponse.json({ error: "Answers required" }, { status: 400 });

    await connectToDatabase();
    const doc = await QuizResult.create({
      session,
      stream,
      branch,
      interestAnswers,
      aptitudeAnswers: aptAnswers,
      interestScore,
      aptitudeScore,
      totalScore
    });

    return NextResponse.json({ success: true, id: doc._id });
  } catch (err) {
    console.error("Error saving result:", err);
    return NextResponse.json({ error: "Failed to save result" }, { status: 500 });
  }
}


