"use client";

import { Button } from "@/components/ui/button";
import { getAPI } from "@/lib/apiCall";
import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
  roll: string;
  email: string;
  phone: string;
  attendance?: number;
};

export default function TeacherStudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [ courseOption, setCourseOption ] = useState<Record<number, string>>({});
  const [ course_id, setCourseId ] = useState<null | number>();
  const [search, setSearch] = useState("");

  useEffect(()=>{
    (async () => {
      await fetchCourseList();
    })()
  },[]);

  useEffect(()=>{
    if(course_id){
      fetchStudents();
    }
  },[course_id]);

  const fetchCourseList = async ()=>{
  const { data } = await getAPI(`/teacher/coursesList`);
  setCourseOption(data);

  // get first key
  const firstCourseId = Number(Object.keys(data)[0]);

  setCourseId(firstCourseId);
}

  const fetchStudents = async () => {
    if(!course_id) return ;
    
    const { data } = await getAPI(`/teacher/students/${course_id}`);
    console.log(data)
    setStudents(data);
  }

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex">
        <h1 className="text-2xl font-bold mb-6">Students</h1>
      </div>

      {/* Search */}
      <div className="mb-4 flex space-x-3">
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select 
        value={course_id ?? ""} 
        onChange={(e) => setCourseId(Number(e.target.value))}
        className="font-bold text-xl dark:bg-black border px-3 py-2 rounded-sm ml-auto mr-2 capitalize"
        >
          {
            courseOption && Object.entries(courseOption).map(([id,name]) => (
              <option key={id} value={id}>{name}</option>
            ))
          }
        </select>
      </div>

      {/* Table */}
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Name</th>
              <th>Roll No</th>
              <th>Email</th>
              {/* <th>Attendance</th> */}
              <th>Phone no.</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.id} className="border-b">
                <td className="py-3">{s.name}</td>
                <td>{s.roll}</td>
                <td>{s.email}</td>

                {/* <td
                  className={
                    s?.attendance >= 75
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  {s.attendance}%
                </td> */}
                <td>{s.phone}</td>

                <td className="space-x-2">
                  <Button className="bg-blue-500 text-white px-3 py-1 rounded">
                      <Eye />
                    </Button>

                    <Button className="bg-yellow-500 text-white px-3 py-1 rounded">
                      <Pencil />
                    </Button>

                    <Button className="bg-red-500 text-white px-3 py-1 rounded">
                      <Trash2 />
                    </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}