"use client";

import React, { useState } from "react";

type Student = {
  id: number;
  name: string;
  marks: number;
};

export default function TeacherGradesPage() {
  const [selectedClass, setSelectedClass] = useState("BCA 3rd Year");
  const [exam, setExam] = useState("Mid Term");

  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Rahul", marks: 80 },
    { id: 2, name: "Anjali", marks: 65 },
    { id: 3, name: "Amit", marks: 40 },
  ]);

  const handleMarksChange = (id: number, value: number) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, marks: value } : s
      )
    );
  };

  const getGrade = (marks: number) => {
    if (marks >= 85) return "A";
    if (marks >= 70) return "B";
    if (marks >= 50) return "C";
    return "F";
  };

  const handleSave = () => {
    console.log({
      class: selectedClass,
      exam,
      students,
    });

    alert("Grades saved!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Grade Students</h1>

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

        <select
          value={exam}
          onChange={(e) => setExam(e.target.value)}
          className="border p-2 rounded"
        >
          <option>Mid Term</option>
          <option>Final Exam</option>
        </select>
      </div>

      {/* Table */}
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Student Name</th>
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="py-3">{student.name}</td>

                <td>
                  <input
                    type="number"
                    value={student.marks}
                    onChange={(e) =>
                      handleMarksChange(
                        student.id,
                        Number(e.target.value)
                      )
                    }
                    className="border p-1 rounded w-20"
                  />
                </td>

                <td
                  className={`font-semibold ${
                    student.marks >= 50
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {getGrade(student.marks)}
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
          Save Grades
        </button>
      </div>
    </div>
  );
}