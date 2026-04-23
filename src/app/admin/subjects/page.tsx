"use client";

import React, { useState } from "react";

type Subject = {
  id: number;
  name: string;
  className: string;
  teacher: string;
};

export default function AdminSubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([
    {
      id: 1,
      name: "Web Development",
      className: "BCA 3rd Year",
      teacher: "Mr. Sharma",
    },
    {
      id: 2,
      name: "Database Systems",
      className: "BCA 2nd Year",
      teacher: "Ms. Gupta",
    },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Subjects</h1>

      {/* Create Button */}
      <div className="mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          + Create Subject
        </button>
      </div>

      {/* Table */}
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Subject Name</th>
              <th>Class</th>
              <th>Teacher</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((sub) => (
              <tr key={sub.id} className="border-b">
                <td className="py-3">{sub.name}</td>
                <td>{sub.className}</td>
                <td>{sub.teacher}</td>

                <td className="space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>

                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Assign Teacher
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}