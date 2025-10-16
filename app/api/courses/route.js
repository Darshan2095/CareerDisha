import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Course from '@/models/Course';

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const level = searchParams.get('level') || '';
    const category = searchParams.get('category') || '';

    const filter = {};

    if (level) {
      filter.level = { $regex: level, $options: 'i' };
    }

    if (category) {
      filter.category = { $regex: category, $options: 'i' };
    }

    const courses = await Course.find(filter).sort({ level: 1, category: 1 });

    if (search) {
      const filteredCourses = courses.map(courseGroup => ({
        ...courseGroup.toObject(),
        courses: courseGroup.courses.filter((course) =>
          course.name.toLowerCase().includes(search.toLowerCase()) ||
          course.notes.toLowerCase().includes(search.toLowerCase()) ||
          course.description?.toLowerCase().includes(search.toLowerCase())
        )
      })).filter(courseGroup => courseGroup.courses.length > 0);

      return NextResponse.json(filteredCourses);
    }

    return NextResponse.json(courses);

  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}

