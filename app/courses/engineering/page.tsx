"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function EngineeringPage() {
  const router = useRouter();
  const [selectedCareer, setSelectedCareer] = useState("");

  const handleCareerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCareer(value);
    if (value) router.push(value);
  };

  const fields = [
    { title: "Electrical Engineering", img: "/1A-Electrical_Engineering.png", link: "/courses/engineering/ElectricalEngineeringPage/" },
    { title: "Mechanical Engineering", img: "/1B-Mechanical_Automobile_Engineering.png", link: "/courses/engineering/MechanicalEngineeringPage/" },
    { title: "Civil Engineering", img: "/1C-Civil_Engineering.png", link: "/courses/engineering/CivilEngineeringPage/" },
    { title: "Computer Applications", img: "/shutterstock_284316539_CL.png", link: "/courses/engineering/ComputerApplicationPage/" },
    { title: "Game Development", img: "/Game_Development.png", link: "/courses/engineering/GameDevelopmentPage/" },
    { title: "Aerospace Engineering", img: "/aerospace.png", link: "/courses/engineering/ElectricalEngineeringPage/" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     

      {/* Hero Banner */}
      <section
        className="relative h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/cl-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Library</h1>
          <p className="text-lg md:text-xl opacity-90">Explore various engineering career paths</p>
        </div>
      </section>

      {/* Breadcrumb + Dropdown */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span>Home</span>
            <span className="text-gray-400">›</span>
            <span>Career Library</span>
            <span className="text-gray-400">›</span>
            <span className="text-gray-800 font-medium">Engineering</span>
          </div>

          <div className="relative">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
              value={selectedCareer}
              onChange={handleCareerChange}
            >
              <option value="" disabled>Choose another Career</option>
              <option value="/courses/engineering">Engineering</option>
              <option value="/courses/engineering/ComputerApplicationPage">Computer Application & IT</option>
              <option value="/courses/engineering/MechanicalEngineeringPage">Game Development</option>
              <option value="/courses/engineering/mech">Mechanical Engineering</option>
              <option value="/courses/engineering/CivilEngineeringPage">Civil Engineering</option>
              <option value="/courses/engineering/ElectricalEngineeringPage">Electrical Engineering</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Engineering</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Engineering is one of the most versatile degrees spanning multiple domains...</p>
            <p>With increasing competition in the field, huge numbers of engineering colleges...</p>
            <p>A four year Bachelor's degree in Engineering can be quite rewarding...</p>
            <p>An engineering degree from the coveted colleges opens doors for top companies...</p>
            <p><strong className="text-gray-800">Trending fields:</strong> Computer Science Engineering, Electronic & Communication Engineering, Sound Engineering, Marine Engineering</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fields.map((field, index) => (
            <Link key={index} href={field.link} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="relative h-48 w-full">
                <Image
                  src={field.img}
                  alt={field.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {field.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
