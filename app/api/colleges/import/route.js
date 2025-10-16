import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import College from "@/models/College";
import { promises as fs } from "fs";
import path from "path";

export async function POST() {
  try {
    await connectDB();

    const filePath = path.join(process.cwd(), "ext", "jammu_kashmir_colleges_govt_private.json");
    const raw = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(raw);

    if (!Array.isArray(data)) {
      return NextResponse.json({ error: "JSON root must be an array" }, { status: 400 });
    }

    const result = await College.insertMany(data, { ordered: false });
    return NextResponse.json({ inserted: result.length });
  } catch (error) {
    return NextResponse.json({ error: error.message || String(error) }, { status: 500 });
  }
}

