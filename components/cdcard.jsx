import { MapPin } from "lucide-react";

const colleges = [
  {
    name: "National Institute of Technology (NIT) Srinagar",
    tags: [
      { text: "Engineering", style: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
      { text: "B.Tech", style: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" },
      { text: "M.Tech", style: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300" },
    ],
    address: "Hazratbal, Srinagar, Jammu and Kashmir 190006",
    stats: [
      { value: "#8", label: "NIRF Ranking 2024", style: "text-orange-600 dark:text-orange-400" },
      { value: "95.2%", label: "JEE Main Cutoff", style: "text-red-600 dark:text-red-400" },
    ],
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "NIT Srinagar Campus",
  },
  {
    name: "Government Medical College (GMC) Jammu",
    tags: [
        { text: "Medical", style: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300" },
        { text: "MBBS", style: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" },
        { text: "MD/MS", style: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300" },
    ],
    address: "Sector 3, Channi Himmat, Jammu, Jammu and Kashmir 180016",
    stats: [
      { value: "#45", label: "NIRF Medical Ranking", style: "text-orange-600 dark:text-orange-400" },
      { value: "580+", label: "NEET Cutoff Score", style: "text-red-600 dark:text-red-400" },
    ],
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "GMC Jammu Campus",
  },
  {
    name: "University of Kashmir (KU)",
    tags: [
      { text: "University", style: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300" },
      { text: "Arts & Science", style: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" },
      { text: "Commerce", style: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300" },
    ],
    address: "Hazratbal, Srinagar, Jammu and Kashmir 190006",
    stats: [
      { value: "A+", label: "NAAC Grade", style: "text-orange-600 dark:text-orange-400" },
      { value: "85%", label: "Merit Cutoff", style: "text-red-600 dark:text-red-400" },
    ],
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "University of Kashmir Campus",
  },
];

const CollegeCard = ({ college }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
      <div className="lg:col-span-3 p-6 lg:p-8">
        <div className="flex flex-col h-full">
          <h3 className="font-urbanist font-semibold text-xl lg:text-2xl text-gray-900 dark:text-white mb-3">
            {college.name}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {college.tags.map((tag, index) => (
              <span key={index} className={`px-3 py-1 text-sm font-medium rounded-full ${tag.style}`}>
                {tag.text}
              </span>
            ))}
          </div>
          <div className="flex items-start gap-2 mb-4">
            <MapPin size={16} className="text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
            <p className="font-poppins text-gray-600 dark:text-gray-300 text-sm">
              {college.address}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-auto">
            {college.stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <div className={`text-lg font-bold ${stat.style}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <img
          src={college.image}
          alt={college.imageAlt}
          className="w-full h-full min-h-[250px] lg:min-h-[280px] object-cover"
        />
      </div>
    </div>
  </div>
);

export default function Cdcard() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="text-center mb-12">
        <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
          Featured Colleges in J&K
        </h2>
        <p className="font-poppins text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore top-rated educational institutions across Jammu & Kashmir
        </p>
      </div>
      <div className="space-y-6 max-w-5xl mx-auto">
        {colleges.map((college, index) => (
          <CollegeCard key={index} college={college} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-inter font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-100 shadow-lg">
          View All Colleges
        </button>
      </div>
    </div>
  );
}



