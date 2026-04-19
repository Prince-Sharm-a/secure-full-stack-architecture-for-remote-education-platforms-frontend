"use client";

import React, { useState } from "react";

type Class = {
  id: number;
  name: string;
  teacher: string;
  students: number;
};

export default function AdminCoursesPage() {
  const [classes, setClasses] = useState<Class[]>([
    {
      id: 1,
      name: "BCA 3rd Year",
      teacher: "Mr. Sharma",
      students: 40,
    },
    {
      id: 2,
      name: "BCA 2nd Year",
      teacher: "Ms. Gupta",
      students: 35,
    },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Classes</h1>

      {/* Create Button */}
      <div className="mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          + Create Class
        </button>
      </div>

      {/* Table */}
      <div className="bg-white p-5 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Class Name</th>
              <th>Teacher</th>
              <th>Students</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {classes.map((cls) => (
              <tr key={cls.id} className="border-b">
                <td className="py-3">{cls.name}</td>
                <td>{cls.teacher}</td>
                <td>{cls.students}</td>

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