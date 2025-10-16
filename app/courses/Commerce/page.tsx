"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function CommerceLandingPage() {
  const router = useRouter();
  const [selectedCareer, setSelectedCareer] = useState("");

  const handleCareerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCareer(value);
    if (value) router.push(value);
  };

  const fields = [
    { title: "Chartered Accountancy (CA)", img: "/ca-profession.png", link: "/courses/Commerce/CAPage/" },
    { title: "Company Secretary (CS)", img: "/company-secretary.png", link: "/courses/Commerce/CSPage/" },
    { title: "Cost & Management Accountancy (CMA)", img: "/cma-profession.png", link: "/courses/Commerce/CMAPage/" },
    { title: "Banking & Insurance", img: "/banking-insurance.png", link: "/courses/Commerce/BankingPage/" },
    { title: "Business Management", img: "/business-management.png", link: "/courses/Commerce/ManagementPage/" },
    { title: "Marketing & Sales", img: "/marketing-sales.png", link: "/courses/Commerce/MarketingPage/" },
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
          <p className="text-lg md:text-xl opacity-90">Explore diverse commerce career paths in India</p>
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
            <span className="text-gray-800 font-medium">Commerce</span>
          </div>

          <div className="relative">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
              value={selectedCareer}
              onChange={handleCareerChange}
            >
              <option value="" disabled>Choose another Career</option>
              <option value="/commerce">Commerce</option>
              <option value="/chartered-accountancy">Chartered Accountancy (CA)</option>
              <option value="/company-secretary">Company Secretary (CS)</option>
              <option value="/cost-management-accountancy">Cost & Management Accountancy (CMA)</option>
              <option value="/banking-insurance">Banking & Insurance</option>
              <option value="/business-management">Business Management</option>
              <option value="/marketing-sales">Marketing & Sales</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Commerce & Business in India</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Commerce education in India offers a diverse range of career opportunities that are highly respected and in demand...
            </p>
            <p>
              Professional courses like Chartered Accountancy (CA), Company Secretary (CS), and Cost and Management Accountancy (CMA) are particularly prestigious in India...
            </p>
            <p>
              Beyond these professional courses, commerce graduates can pursue careers in banking, insurance, financial services, business management, marketing, and entrepreneurship...
            </p>
            <p>
              The Indian commerce sector has seen significant growth with the expansion of multinational corporations, the startup ecosystem, and government initiatives like Make in India and Digital India...
            </p>
            <p>
              <strong className="text-gray-800">Trending fields in India:</strong> Financial Technology (FinTech), GST and Taxation Services, Investment Banking, Digital Marketing, E-commerce Management, Startup Consulting
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
