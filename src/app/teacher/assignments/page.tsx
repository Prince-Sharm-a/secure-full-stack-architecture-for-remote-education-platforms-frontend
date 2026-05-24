"use client";

import { Button } from "@/components/ui/button";
import { getAPI } from "@/lib/apiCall";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type AssignmentType = {
  id: number
  course_id: number
  title: string
  due_date: string;
  submission_count: number
  courses:{
    id:number
    students_count:number
    title:"testing"
  }
};

export default function TeacherAssignmentsPage() {
  const [assignments, setAssignments] = useState<AssignmentType[]>([]);
  const [ courseOption, setCourseOption ] = useState<Record<number, string>>({});
  const [ course_id, setCourseId ] = useState<null | number>();

  useEffect(()=>{
    (async () => {
      await fetchCourseList();
    })()
  },[]);

  useEffect(()=>{
    if(course_id){
      fetchAssignment();
    }
  },[course_id]);

  const fetchCourseList = async ()=>{
    const { data } = await getAPI(`/teacher/coursesList`);
    setCourseOption(data);

    // get first key
    const firstCourseId = Number(Object.keys(data)[0]);

    setCourseId(firstCourseId);
  }

  const fetchAssignment = async ()=>{
    if(!course_id) return ;

    const { data } = await getAPI(`/teacher/course/${course_id}/assignments`);
    console.log(data)
    setAssignments(data);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Assignments</h1>

      {/* Create Button */}
      <div className="mb-4 flex">
        <Link href={`/teacher/assignments/${course_id}`}>
        <Button className="bg-green-500 hover:bg-green-500/50 text-white px-4 py-2 rounded">
          + Create Assignment
        </Button>
        </Link>
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
      <div className="dark:shadow-gray-700 p-5 rounded-xl shadow overflow-x-auto">
        <table className="min-w-svh w-full text-center">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Title</th>
              <th>Course</th>
              <th>Due Date</th>
              <th>Submissions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((a) => {
              const isClosed = new Date(a.due_date) < new Date();

              return (
                <tr key={a.id} className="border-b">
                  <td className="py-3 capitalize">{a.title}</td>
                  <td className="capitalize">{a.courses.title}</td>
                  <td>{`${new Date(a.due_date).getDate()}/${new Date(a.due_date).getMonth()+1}/${new Date(a.due_date).getFullYear()}`}</td>

                  <td className="">
                    {a.submission_count}/{a.courses.students_count}
                  </td>

                  <td
                    className={
                      isClosed ? "text-red-500" : "text-green-600"
                    }
                  >
                    {isClosed ? "Closed" : "Active"}
                  </td>

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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}