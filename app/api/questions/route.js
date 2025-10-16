import { NextResponse } from "next/server";
import { questionsData } from "../_lib/questions";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const branch = searchParams.get("branch");
  const qset = questionsData.find(q => q.branch === branch);
  if (!qset) return NextResponse.json({ error: "Branch not found" }, { status: 404 });
  return NextResponse.json({ interest: qset.interest, aptitude: qset.aptitude });
}


