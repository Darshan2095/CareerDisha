"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Cell,
} from "recharts";

export default function Results() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("/api/results")
      .then((res) => setRows(res.data))
      .catch(console.error);
  }, []);

  const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#14b8a6"];

  const chartData = rows.map((r) => ({
    branch: r.branch,
    score: r.totalScore,
  }));

  const topBranches = [...rows]
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
     
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Your Career Scores
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Visualized breakdown of your branch scores with recommendations.
      </p>

      {rows.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">
          No results yet. Complete some quizzes first!
        </p>
      ) : (
        <>
          {/* Chart */}
          <div className="my-8 bg-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 20, right: 40, left: 60, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis type="number" />
                <YAxis dataKey="branch" type="category" width={120} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="score"
                  barSize={25}
                  radius={[0, 8, 8, 0]}
                  animationBegin={200}
                  animationDuration={1500}
                  animationEasing="ease-out"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Description */}
          <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-indigo-50 to-gray-50 text-gray-700">
            <h2 className="text-xl font-bold mb-3">Color Guide</h2>
            <ul className="space-y-2">
              {chartData.map((item, i) => (
                <li
                  key={i}
                  className="font-medium text-base"
                  style={{ color: COLORS[i % COLORS.length] }}
                >
                  {item.branch}: {item.score} points
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div className="mt-8 p-6 rounded-xl border border-green-200 bg-gradient-to-r from-emerald-50 to-green-50 text-green-800">
            <h2 className="text-xl font-bold mb-3">Recommended Branches for You 🎯</h2>
            <ul className="list-disc pl-6 space-y-2">
              {topBranches.map((b, i) => (
                <li
                  key={i}
                  className="font-semibold text-lg animate-fadeInUp"
                >
                  {b.branch} ({b.totalScore} points) — Highly suitable based on
                  your performance.
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
