// app/keydates/page.jsx
import React from "react"; // adjust path if needed

export default function KeyDates() {
  const keyDates = [
    { title: "Admission Registration Opens", date: "June 28, 2025", color: "bg-blue-100" },
    { title: "Application Deadline", date: "July 22, 2025", color: "bg-red-100" },
    { title: "Final Merit List (Round 2)", date: "July 26, 2025", color: "bg-green-100" },
    { title: "Choice Filling (Round 3)", date: "August 2–4, 2025", color: "bg-orange-100" },
    { title: "Seat Allocation (Round 3)", date: "August 6, 2025", color: "bg-purple-100" },
    { title: "Classes Commence", date: "August 14, 2025", color: "bg-yellow-100" },
    { title: "Diploma-to-Degree Choice Filling", date: "July 4–9, 2025", color: "bg-cyan-100" },
    { title: "Diploma-to-Degree Seat Allocation", date: "July 9, 2025", color: "bg-pink-100" },
    { title: "Diploma-to-Degree Classes Begin", date: "July 14, 2025", color: "bg-lime-100" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 font-sans">
     
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-10 text-gray-800">
        Key Dates for Degree Engineering Admissions
      </h1>

      <div className="flex flex-col gap-10 max-w-3xl mx-auto">
        {keyDates.map((item, index) => (
          <div key={index} className="flex items-start relative md:flex-row flex-col">
            {/* Left: circle + line */}
            <div className="flex flex-col items-center w-20 md:w-24 relative">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-sky-500 text-white font-semibold text-lg flex items-center justify-center shadow-md z-10">
                {index + 1}
              </div>
              {index !== keyDates.length - 1 && (
                <div className="w-1 h-14 md:h-16 bg-sky-500 mt-1 z-0 md:mt-2"></div>
              )}
            </div>

            {/* Right: card */}
            <div
              className={`flex-1 ${item.color} p-5 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between ml-4 md:ml-6`}
            >
              <h2 className="text-gray-800 font-semibold text-lg pr-4 mb-3 md:mb-0">
                {item.title}
              </h2>
              <div className="text-gray-700 bg-white/50 px-4 py-2 rounded-lg font-medium text-center">
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
