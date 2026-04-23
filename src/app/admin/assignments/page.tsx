"use client";

import React from "react";

type Assignment = {
  id: number;
  title: string;
  teacher: string;
  className: string;
  dueDate: string;
  submissions: number;
  totalStudents: number;
};

export default function AdminAssignmentsPage() {
  const assignments: Assignment[] = [
    {
      id: 1,
      title: "React Project",
      teacher: "Mr. Sharma",
      className: "BCA 3rd Year",
      dueDate: "2026-04-25",
      submissions: 20,
      totalStudents: 40,
    },
    {
      id: 2,
      title: "DBMS Report",
      teacher: "Ms. Gupta",
      className: "BCA 2nd Year",
      dueDate: "2026-04-22",
      submissions: 30,
      totalStudents: 35,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        All Assignments
      </h1>

      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Title</th>
              <th>Teacher</th>
              <th>Class</th>
              <th>Due Date</th>
              <th>Submissions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((a) => {
              const isClosed =
                new Date(a.dueDate) < new Date();

              return (
                <tr key={a.id} className="border-b">
                  <td className="py-3">{a.title}</td>
                  <td>{a.teacher}</td>
                  <td>{a.className}</td>
                  <td>{a.dueDate}</td>

                  <td>
                    {a.submissions}/{a.totalStudents}
                  </td>

                  <td
                    className={
                      isClosed
                        ? "text-red-500"
                        : "text-green-600"
                    }
                  >
                    {isClosed ? "Closed" : "Active"}
                  </td>

                  <td className="space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      View
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                      Disable
                    </button>

                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}