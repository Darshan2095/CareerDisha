import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Scholarship from '@/models/Scholarship';

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const location = searchParams.get('location') || '';

    const filter = {};

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { target_audience: { $regex: search, $options: 'i' } },
        { administered_by: { $regex: search, $options: 'i' } }
      ];
    }

    if (category) {
      filter.category = { $regex: category, $options: 'i' };
    }

    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }

    const scholarships = await Scholarship.find(filter).sort({ name: 1 });

    return NextResponse.json(scholarships);

  } catch (error) {
    console.error('Error fetching scholarships:', error);
    return NextResponse.json(
      { error: 'Failed to fetch scholarships' },
      { status: 500 }
    );
  }
}

