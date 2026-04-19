"use client";

import React, { useState } from "react";

type Student = {
  id: number;
  name: string;
  present: boolean;
};

export default function TeacherAttendancePage() {
  const [selectedClass, setSelectedClass] = useState("BCA 3rd Year");
  const [date, setDate] = useState("2026-04-20");

  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Rahul", present: true },
    { id: 2, name: "Anjali", present: false },
    { id: 3, name: "Amit", present: true },
  ]);

  const toggleAttendance = (id: number) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
  };

  const handleSave = () => {
    console.log({
      class: selectedClass,
      date,
      students,
    });

    alert("Attendance saved!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Mark Attendance</h1>

      {/* Controls */}
      <div className="flex gap-4 mb-6">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="border p-2 rounded"
        >
          <option>BCA 3rd Year</option>
          <option>BCA 2nd Year</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {/* Student List */}
      <div className="bg-white p-5 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Student Name</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="py-3">{student.name}</td>

                <td>
                  <button
                    onClick={() => toggleAttendance(student.id)}
                    className={`px-3 py-1 rounded text-white ${
                      student.present
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {student.present ? "Present" : "Absent"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Save Button */}
      <div className="mt-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-5 py-2 rounded"
        >
          Save Attendance
        </button>
      </div>
    </div>
  );
}