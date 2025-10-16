// app/quiz/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function QuizHome() {
  const [branches, setBranches] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/branches")
      .then((r) => setBranches(r.data))
      .catch(console.error);
  }, []);

  const icons = {
    Engineering: "⚙️",
    Medical: "⚕️",
    Commerce: "💼",
    Arts: "🎨",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 flex flex-col items-center font-sans">
      {/* Header */}
      <div className="text-center mb-8 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-3 animate-floatUp">
          Career Quiz — Discover Your Fit
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed animate-fadeIn">
          We'll walk you through core branches (
          <strong>Engineering → Medical → Commerce → Arts</strong>). <br />
          Each branch has <strong>4 interest</strong> + <strong>3 aptitude</strong> (last is a puzzle).
        </p>
      </div>

      {/* Branch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8 w-full max-w-6xl">
        {branches.map((b, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 text-center shadow-md transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl cursor-pointer animate-floatIn"
          >
            <div className="text-4xl mb-3 drop-shadow-md animate-popIn">
              {icons[b.stream] || "🎓"}
            </div>
            <div className="text-indigo-500 font-semibold">{b.session}</div>
            <div className="text-gray-800 font-bold text-lg my-1">{b.stream}</div>
            <div className="text-gray-500 italic">{b.branch}</div>
          </div>
        ))}
      </div>

      {/* Start Button */}
      <button
        onClick={() => router.push("/quiz/start")}
        className="bg-gradient-to-r from-purple-700 to-blue-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transform transition-all animate-pulseGlow w-full max-w-xs"
      >
        Start Quiz →
      </button>

      {/* Animations (Tailwind plugin or custom classes) */}
      <style jsx>{`
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-floatUp {
          animation: floatUp 0.7s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-floatIn {
          animation: floatIn 0.6s ease forwards;
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.7) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .animate-popIn {
          animation: popIn 0.6s ease forwards;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(124, 58, 237, 0.4); }
          50% { box-shadow: 0 0 18px rgba(124, 58, 237, 0.6); }
        }
        .animate-pulseGlow {
          animation: pulseGlow 2s infinite;
        }
      `}</style>
    </div>
  );
}
