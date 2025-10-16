"use client";

import { useState } from "react";
import SchemeCard from "@/components/SchemeCard";
import FilterSidebar from "@/components/FilterSidebar";

export default function SchemePage() {
  const [schemes, setSchemes] = useState([
    {
      id: 1,
      title: "PM Kisan Samman Nidhi",
      description: "Direct income support to farmers",
      eligibility: "Small and marginal farmers",
    },
    {
      id: 2,
      title: "Ayushman Bharat",
      description: "Health insurance scheme for poor families",
      eligibility: "Families below poverty line",
    },
    {
      id: 3,
      title: "Pradhan Mantri Awas Yojana",
      description: "Housing for all by 2022",
      eligibility: "Economically weaker sections",
    },
  ]);

  return (
    <div className="flex py-10 rounded-lg gap-4">
      <FilterSidebar />
      
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Government Schemes</h1>
        <div className="space-y-4">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      </div>
    </div>
  );
}
