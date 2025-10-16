"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ScholarshipDetailPage() {
  const params = useParams();
  const id = params?.id;

  const scholarship = {
    id: parseInt(id),
    title: "Post-Matric Scholarship for SC Students",
    state: "Gujarat",
    deadline: "2025-09-30",
    description: "Financial aid for SC category students pursuing higher education in recognized institutions.",
    eligibility: "SC category students with family income below 2.5 lakhs",
    amount: "Up to ₹20,000 per year",
    applicationProcess: "Online application through state portal",
    documents: ["Income certificate", "Caste certificate", "Academic records", "Bank details"],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">{scholarship.title}</h1>
          <Link href="/scholarships" className="text-sm text-blue-600">Back to scholarships</Link>
        </div>

        <Card className="shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Overview</CardTitle>
            <p className="text-gray-500">State: {scholarship.state} | Deadline: {scholarship.deadline}</p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{scholarship.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500">Amount</div>
                <div className="font-semibold text-green-600">{scholarship.amount}</div>
              </div>
              <div>
                <div className="text-gray-500">Application Process</div>
                <div className="font-medium">{scholarship.applicationProcess}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Eligibility Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{scholarship.eligibility}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {scholarship.documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How to Apply</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
                <div className="text-sm font-medium">Check Eligibility</div>
                <div className="text-xs text-gray-600 mt-1">Verify all criteria</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-sm font-medium">Gather Documents</div>
                <div className="text-xs text-gray-600 mt-1">Prepare required files</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm font-medium">Submit Application</div>
                <div className="text-xs text-gray-600 mt-1">Apply online</div>
              </div>
            </div>
            <div className="text-center pt-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

