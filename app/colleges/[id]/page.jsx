import { connectDB } from "@/lib/mongodb";
import College from "@/models/College";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  GraduationCap,
  Star,
  Briefcase,
} from "lucide-react";

export default async function CollegeDetailsPage({ params }) {
  await connectDB();
  const { id } = await params;
  const d = await College.findById(id).lean();
  if (!d) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12 text-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold">{d.name}</h1>
            <div className="flex flex-wrap gap-2 mt-2 text-sm text-blue-100">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> {d.district}, {d.main_city}
              </span>
              <span className="flex items-center gap-1">
                <GraduationCap size={14} /> {d.type}
              </span>
              <span className="flex items-center gap-1">
                <Star size={14} /> Ranking: {d.ranking || "--"}
              </span>
            </div>
          </div>
          <Link
            href="/colleges"
            className="px-4 w-[50%] py-2 rounded-lg bg-white/20 hover:bg-white/30 transition text-sm"
          >
            ← Back to list
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        {/* Overview */}
        <Card className="shadow-sm border-none">
          <CardHeader>
            <CardTitle className="text-lg">Overview</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs capitalize">
                {d.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs">
                Ranking: {d.ranking || "--"}
              </span>
            </div>
            <p>{d.user_reviews || "No description available."}</p>
          </CardContent>
        </Card>

        {/* Courses + Placements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Courses & Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <div className="text-gray-500">Courses Available</div>
                <div className="mt-1">
                  {(d.courses_available || []).length > 0
                    ? d.courses_available.join(", ")
                    : "--"}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-500">CD Score</div>
                  <div className="font-medium">
                    {d.cd_score || "--"}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Course Fees</div>
                  <div className="font-medium">
                    {d.course_fees || "--"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Placements</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Average Package</span>
                <span className="font-medium">
                  {d.placement?.average_package || "--"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Highest Package</span>
                <span className="font-medium">
                  {d.placement?.highest_package || "--"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Placement %</span>
                <span className="font-medium">
                  {d.placement?.placement_percent || "--"}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews + Ranking */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Reviews</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 italic">
              {d.user_reviews ? `“${d.user_reviews}”` : "--"}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ranking</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold text-blue-600">
              {d.ranking || "--"}
            </CardContent>
          </Card>
        </div>

        {/* Cutoff Category-wise */}
        <Card className="shadow-sm ">
          <CardHeader>
            <CardTitle className="text-lg">Cutoff (Category-wise)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-700">
            {d.cutoff_category_wise && Object.keys(d.cutoff_category_wise).length > 0 ? (
              <div className="">
                {Object.entries(d.cutoff_category_wise).map(([cat, val]) => (
                  <div key={cat} className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
                    <span className="uppercase tracking-wide text-xs text-gray-500">{cat}</span>
                    <span className="font-medium">{String(val)}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-500">No cutoff data available.</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
