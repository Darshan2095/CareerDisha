"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function MedicalLandingPage() {
  const router = useRouter();
  const [selectedCareer, setSelectedCareer] = useState("");

  const handleCareerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCareer(value);
    if (value) router.push(value);
  };

  const fields = [
    { title: "MBBS", img: "/11A-MBBS.png", link: "/courses/medical/mbbs" },
    { title: "Dentistry", img: "/12A-Dentist.jpg", link: "/courses/medical/dentistry" },
    { title: "Nursing", img: "/13H-Nursing.png", link: "/courses/medical/nursing" },
    { title: "Pharmacy", img: "/Pharmacy.png", link: "/courses/medical/pharmacy" },
    { title: "Physiotherapy", img: "/13I-Physiotherapist.png", link: "/courses/medical/physiotherapy" },
    { title: "Medical Research", img: "/13G-Medical_Laboratory_Technologist.png", link: "/courses/medical/medicalresearch" },
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
          <p className="text-lg md:text-xl opacity-90">Explore various medical career paths</p>
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
            <span className="text-gray-800 font-medium">Medical</span>
          </div>

          <div className="relative">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white shadow-sm"
              value={selectedCareer}
              onChange={handleCareerChange}
            >
              <option value="" disabled>Choose another Career</option>
              <option value="/medical">Medical</option>
              <option value="/mbbs">MBBS</option>
              <option value="/dentistry">Dentistry</option>
              <option value="/nursing">Nursing</option>
              <option value="/pharmacy">Pharmacy</option>
              <option value="/physiotherapy">Physiotherapy</option>
              <option value="/medical-research">Medical Research</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Medical</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Medical careers offer some of the most rewarding and respected professions globally...</p>
            <p>Pursuing a medical career requires dedication, rigorous education, and a strong foundation in sciences...</p>
            <p>With advancements in medical technology and an aging population, the demand for healthcare professionals continues to grow...</p>
            <p>A career in medicine opens doors to work in various settings including hospitals, clinics, research institutions...</p>
            <p><strong className="text-gray-800">Trending fields:</strong> Telemedicine, Genomic Medicine, Geriatric Medicine, Sports Medicine, Public Health</p>
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
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
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
