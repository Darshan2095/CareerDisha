import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import College from "@/models/College";

export async function GET() {
  try {
    await connectDB();
    const docs = await College.find().sort({ createdAt: -1 });
    const colleges = docs.map((d) => ({
      _id: d._id,
      name: d.name,
      image: d.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-H0PY2hiURdDK9kvJedn-S8zHOwpsnmkHw&s" ,
      address: `${d.district}, ${d.main_city}`,
      description: `${d.user_reviews} • ${d.ranking}`,
      state: d.main_city || "",
      branch: d.category || "",
      type: d.type || "",
      district: d.district,
      main_city: d.main_city,
      courses_available: d.courses_available,
      category: d.category,
      cd_score: d.cd_score,
      course_fees: d.course_fees,
      placement: d.placement,
      user_reviews: d.user_reviews,
      ranking: d.ranking,
    }));
    return NextResponse.json(colleges);
  } catch (error) {
    return NextResponse.json({ error: error.message || String(error) }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const college = new College(body);
    await college.save();
    return NextResponse.json(college, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message || String(error) }, { status: 500 });
  }
}

