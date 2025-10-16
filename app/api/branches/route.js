import { NextResponse } from "next/server";
import { questionsData } from "@/app/api/_lib/questions";

export async function GET() {
  const branches = questionsData.map(q => ({ session: q.session, stream: q.stream, branch: q.branch }));
  return NextResponse.json(branches);
}


