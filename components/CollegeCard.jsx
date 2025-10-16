import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

let imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-H0PY2hiURdDK9kvJedn-S8zHOwpsnmkHw&s";

export default function CollegeCard({ college }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

      {/* Left Side - Image */}
      <div className="lg:col-span-2">
          <img
            src={college.image || imageUrl}
            alt={college.imageAlt || college.name}
            className="w-[95%] h-[95%] rounded mx-2 min-h-[250px] lg:min-h-[280px] object-cover"
          />
        </div>
        
         {/* Right Side - Content */}
        <div className="lg:col-span-3 p-6 lg:p-8">
          <div className="flex flex-col h-full">
            {/* College Name */}
            <h3 className="font-urbanist font-semibold text-xl lg:text-2xl text-blue-600 mb-3 truncate">
              {college.name}
            </h3>

            {/* Address */}
            <div className="flex items-start gap-2 mb-3">
              <MapPin
                size={16}
                className="text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0"
              />
              <p className="font-poppins  text-sm truncate">
                {college.address}
              </p>
            </div>

            {/* Meta Info (State, Branch, Type) */}
            <p className="text-xs mb-4">
              <span className="font-medium">State:</span> {college.state} •{" "}
              <span className="font-medium">Branch:</span> {college.branch} •{" "}
              <span className="font-medium">Type:</span> {college.type}
            </p>

            {/* Description */}
            <p className="text-sm leading-relaxed line-clamp-3 mb-6">
              {college.description}
            </p>

            {/* Stats + Explore More */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              {/* Example Stat (Students or Ranking) */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <div className="text-lg font-bold text-green-600">
                  {college.ranking ?? "500+"}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  Ranking
                </div>
              </div>

              {/* Explore More Button */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex items-center justify-center">
                <Button className="text-sm w-full py-2">
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
    </div>
  );
}
