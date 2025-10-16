import { NextResponse } from "next/server";
import { connectToDatabase } from "../_lib/db";
import QuizResult from "../_lib/models/QuizResult";
import { questionsData, branchOrder } from "../_lib/questions";

export async function GET() {
  try {
    await connectToDatabase();
    const branchCount = questionsData.length || 0;
    const recent = await QuizResult.find().sort({ createdAt: -1 }).limit(branchCount).lean();
    if (!recent || recent.length === 0) return NextResponse.json([]);

    const recentReversed = recent.slice().reverse();
    const ordered = recentReversed.sort((a, b) => {
      const ia = branchOrder.indexOf(a.branch);
      const ib = branchOrder.indexOf(b.branch);
      if (ia === -1 && ib === -1) return 0;
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
    return NextResponse.json(ordered);
  } catch (err) {
    console.error("Error fetching results:", err);
    return NextResponse.json({ error: "Failed to load results" }, { status: 500 });
  }
}


