"use client";

import React from "react";

export default function AssignmentsPage() {
  const assignments = [
    { title: "React Project", due: "20 Apr 2026", status: "Pending" },
    { title: "DBMS Report", due: "18 Apr 2026", status: "Submitted" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Assignments</h1>

      <div className="dark:shadow-gray-700 rounded-xl shadow p-5">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Title</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((a, i) => (
              <tr key={i} className="border-b">
                <td className="py-3">{a.title}</td>
                <td>{a.due}</td>
                <td>
                  <span
                    className={
                      a.status === "Submitted"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {a.status}
                  </span>
                </td>
                <td>
                  {a.status === "Pending" ? (
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Submit
                    </button>
                  ) : (
                    <span className="text-gray-400">Done</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}