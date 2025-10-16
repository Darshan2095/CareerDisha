"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ArtsLandingPage() {
  const router = useRouter();
  const [selectedCareer, setSelectedCareer] = useState("");

  const handleCareerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCareer(value);
    if (value) router.push(value);
  };

  const fields = [
    { title: "Fine Arts", img: "/20A-Fine_Arts.png", link: "/courses/arts/Finearts/" },
    { title: "Performing Arts", img: "/performing-arts.png", link: "/courses/arts/Performingarts/" },
    { title: "Literature & Languages", img: "/literature.png", link: "/courses/arts/Literaturearts/" },
    { title: "History & Archaeology", img: "/41E-Historian.png", link: "/courses/arts/Historyarts/" },
    { title: "Philosophy", img: "/Philosophy.png", link: "/courses/arts/Philosophy/" },
    { title: "Sociology & Anthropology", img: "/41C-Sociology.png", link: "/courses/arts/Sociologyarts/" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      

      {/* Hero Banner */}
      <section
        className="relative h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/cl-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Library</h1>
          <p className="text-lg md:text-xl opacity-90">Explore diverse arts career paths</p>
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
            <span className="text-gray-800 font-medium">Arts</span>
          </div>

          <div className="relative">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
              value={selectedCareer}
              onChange={handleCareerChange}
            >
              <option value="" disabled>Choose another Career</option>
              <option value="/arts">Arts</option>
              <option value="/fine-arts">Fine Arts</option>
              <option value="/performing-arts">Performing Arts</option>
              <option value="/literature">Literature & Languages</option>
              <option value="/history">History & Archaeology</option>
              <option value="/philosophy">Philosophy</option>
              <option value="/sociology">Sociology & Anthropology</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Arts & Humanities</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Arts and Humanities encompass a diverse range of disciplines that explore human expression, culture, and society...
            </p>
            <p>
              Contrary to common misconceptions, arts graduates have a wide array of career opportunities in education, media, design...
            </p>
            <p>
              A degree in Arts and Humanities typically involves studying subjects like literature, history, philosophy, languages, visual arts...
            </p>
            <p>
              Arts graduates often find success in roles such as writers, editors, curators, educators, policy analysts...
            </p>
            <p>
              <strong className="text-gray-800">Trending fields:</strong> Digital Arts, Cultural Heritage Management, Creative Writing, Art Therapy, Museum Studies
            </p>
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
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
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
