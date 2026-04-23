"use client";

import React, { useState } from "react";

type Student = {
  id: number;
  name: string;
  roll: string;
  email: string;
  attendance: number;
};

export default function TeacherStudentsPage() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "Rahul Sharma",
      roll: "BCA001",
      email: "rahul@example.com",
      attendance: 85,
    },
    {
      id: 2,
      name: "Anjali Verma",
      roll: "BCA002",
      email: "anjali@example.com",
      attendance: 72,
    },
    {
      id: 3,
      name: "Amit Kumar",
      roll: "BCA003",
      email: "amit@example.com",
      attendance: 60,
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Students</h1>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Table */}
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Name</th>
              <th>Roll No</th>
              <th>Email</th>
              <th>Attendance</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.id} className="border-b">
                <td className="py-3">{s.name}</td>
                <td>{s.roll}</td>
                <td>{s.email}</td>

                <td
                  className={
                    s.attendance >= 75
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  {s.attendance}%
                </td>

                <td className="space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    View
                  </button>

                  <button className="bg-green-500 text-white px-3 py-1 rounded">
                    Message
                  </button>

                  <button className="bg-purple-500 text-white px-3 py-1 rounded">
                    Results
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