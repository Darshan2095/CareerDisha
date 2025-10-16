import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Course from '@/models/Course';
import fs from 'fs';
import path from 'path';

export async function POST() {
  try {
    await connectDB();

    const filePath = path.join(process.cwd(), 'ext', 'courses.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    await Course.deleteMany({});

    const coursesWithDescriptions = data.courses.map((courseGroup) => ({
      ...courseGroup,
      courses: courseGroup.courses.map((course) => ({
        ...course,
        description: generateCourseDescription(course, courseGroup)
      }))
    }));

    const courses = await Course.insertMany(coursesWithDescriptions);

    return NextResponse.json({
      success: true,
      message: `${courses.length} course categories uploaded successfully`,
      count: courses.length
    });

  } catch (error) {
    console.error('Error uploading courses:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload courses' },
      { status: 500 }
    );
  }
}

function generateCourseDescription(course, courseGroup) {
  const { name, duration, notes } = course;
  const { level, category } = courseGroup;
  
  let description = `${name} is a ${duration} ${level.toLowerCase()} program in ${category}. `;
  
  if (notes) {
    description += notes + '. ';
  }
  
  if (name.includes('B.Tech') || name.includes('B.E.')) {
    description += 'This program provides comprehensive technical education with hands-on training in various engineering disciplines, preparing students for careers in technology, research, and innovation.';
  } else if (name.includes('MBBS')) {
    description += 'This is a comprehensive medical degree program that combines theoretical knowledge with clinical practice, preparing students to become qualified doctors and medical professionals.';
  } else if (name.includes('B.Sc')) {
    description += 'This program offers in-depth study of scientific principles and methodologies, providing a strong foundation for careers in research, academia, and various scientific fields.';
  } else if (name.includes('B.A.')) {
    description += 'This program focuses on liberal arts education, developing critical thinking, communication skills, and cultural awareness for diverse career opportunities.';
  } else if (name.includes('B.Com')) {
    description += 'This program provides comprehensive business and commerce education, preparing students for careers in accounting, finance, banking, and corporate management.';
  } else if (name.includes('BBA')) {
    description += 'This program offers practical business education with focus on management principles, preparing students for leadership roles in various industries.';
  } else if (name.includes('M.Tech') || name.includes('M.E.')) {
    description += 'This advanced program provides specialized technical knowledge and research skills, preparing graduates for senior engineering roles and research positions.';
  } else if (name.includes('MBA')) {
    description += 'This program develops advanced business management skills, leadership capabilities, and strategic thinking for senior management and entrepreneurial roles.';
  } else if (name.includes('M.Sc')) {
    description += 'This program offers advanced scientific study and research opportunities, preparing graduates for specialized roles in research, academia, and industry.';
  } else if (name.includes('PhD')) {
    description += 'This is the highest level of academic achievement, focusing on original research and contributing new knowledge to the field through dissertation work.';
  } else {
    description += 'This program provides specialized education and training in its respective field, preparing students for professional careers and advanced studies.';
  }
  
  return description;
}

