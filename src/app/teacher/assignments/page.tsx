"use client";

import { useState } from "react";

type Assignment = {
  id: number;
  title: string;
  className: string;
  dueDate: string;
  submissions: number;
  totalStudents: number;
};

export default function TeacherAssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      title: "React Project",
      className: "BCA 3rd Year",
      dueDate: "25 Apr 2026",
      submissions: 20,
      totalStudents: 40,
    },
    {
      id: 2,
      title: "DBMS Report",
      className: "BCA 2nd Year",
      dueDate: "22 Apr 2026",
      submissions: 30,
      totalStudents: 35,
    },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Assignments</h1>

      {/* Create Button */}
      <div className="mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          + Create Assignment
        </button>
      </div>

      {/* Table */}
      <div className="bg-white p-5 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Title</th>
              <th>Class</th>
              <th>Due Date</th>
              <th>Submissions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((a) => {
              const isClosed = new Date(a.dueDate) < new Date();

              return (
                <tr key={a.id} className="border-b">
                  <td className="py-3">{a.title}</td>
                  <td>{a.className}</td>
                  <td>{a.dueDate}</td>

                  <td>
                    {a.submissions}/{a.totalStudents}
                  </td>

                  <td
                    className={
                      isClosed ? "text-red-500" : "text-green-600"
                    }
                  >
                    {isClosed ? "Closed" : "Active"}
                  </td>

                  <td className="space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      View
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                      Edit
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