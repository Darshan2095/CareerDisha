import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Scholarship from '@/models/Scholarship';
import fs from 'fs';
import path from 'path';

export async function POST() {
  try {
    await connectDB();

    const filePath = path.join(process.cwd(), 'ext', 'schemes.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    await Scholarship.deleteMany({});

    const scholarships = await Scholarship.insertMany(data.schemes);

    return NextResponse.json({
      success: true,
      message: `${scholarships.length} scholarships uploaded successfully`,
      count: scholarships.length
    });

  } catch (error) {
    console.error('Error uploading scholarships:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload scholarships' },
      { status: 500 }
    );
  }
}

