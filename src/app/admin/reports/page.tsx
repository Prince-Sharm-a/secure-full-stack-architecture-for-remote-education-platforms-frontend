"use client";

import React from "react";

export default function AdminReportsPage() {
  // Dummy stats
  const stats = [
    { title: "Total Students", value: 500 },
    { title: "Total Teachers", value: 45 },
    { title: "Total Classes", value: 20 },
    { title: "Submission Rate", value: "78%" },
  ];

  // Dummy performance data
  const performance = [
    { className: "BCA 3rd Year", avgMarks: 72 },
    { className: "BCA 2nd Year", avgMarks: 65 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Reports & Analytics</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-gray-500">{s.title}</h3>
            <p className="text-xl font-bold mt-2">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Attendance Overview */}
      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Attendance Overview
        </h2>

        <div className="space-y-3">
          <div>
            <p>BCA 3rd Year - 82%</p>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-green-500 h-2 rounded w-[82%]"></div>
            </div>
          </div>

          <div>
            <p>BCA 2nd Year - 70%</p>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-yellow-500 h-2 rounded w-[70%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Table */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          Class Performance
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Class</th>
              <th>Average Marks</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {performance.map((p, i) => (
              <tr key={i} className="border-b">
                <td className="py-3">{p.className}</td>
                <td>{p.avgMarks}</td>

                <td
                  className={
                    p.avgMarks >= 70
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  {p.avgMarks >= 70 ? "Good" : "Needs Improvement"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}