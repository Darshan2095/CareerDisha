import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

let imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-H0PY2hiURdDK9kvJedn-S8zHOwpsnmkHw&s";

export default function CollegeCard({ college }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Wrapper Grid - Switches layout based on screen size */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
        {/* Left Side - Image */}
        <div className="md:col-span-2">
          <img
            src={college.image || imageUrl}
            alt={college.imageAlt || college.name}
            className="w-full h-56 sm:h-64 md:h-full object-cover rounded-t-2xl md:rounded-none md:rounded-l-2xl"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:col-span-3 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
          {/* College Name */}
          <h3 className="font-urbanist font-semibold text-lg sm:text-xl md:text-2xl text-blue-700 mb-2 md:mb-3 truncate">
            {college.name}
          </h3>

          {/* Address */}
          <div className="flex items-start gap-2 mb-2 md:mb-3">
            <MapPin
              size={16}
              className="text-gray-500 mt-1 flex-shrink-0"
            />
            <p className="font-poppins text-sm sm:text-base text-gray-600 truncate">
              {college.address}
            </p>
          </div>

          {/* Meta Info (State, Branch, Type) */}
          <p className="text-xs sm:text-sm text-gray-700 mb-4">
            <span className="font-medium">State:</span> {college.state} •{" "}
            <span className="font-medium">Branch:</span> {college.branch} •{" "}
            <span className="font-medium">Type:</span> {college.type}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed line-clamp-3 mb-5">
            {college.description}
          </p>

          {/* Stats + Explore */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-auto">
            {/* Ranking */}
            <div className="bg-gray-50 rounded-lg p-3 text-center sm:text-left">
              <div className="text-xl font-bold text-green-600">
                {college.ranking ?? "500+"}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Ranking
              </div>
            </div>

            {/* Explore More Button */}
            <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center">
              <Button className="text-sm sm:text-base w-full py-2">
                <Link
                  href={`/colleges/${college._id ?? college.id ?? ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
