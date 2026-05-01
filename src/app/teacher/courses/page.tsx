"use client"
import { Button } from "@/components/ui/button";
import { getAPI } from "@/lib/apiCall";
import Link from "next/link";
import { useEffect, useState } from "react";

type CoursesType = {
  id: number;
  title: string;
  level: string;
  students?: number;
};

export default function TeacherCourses() {
  const [data, setData] = useState<CoursesType[]>([]);
  
  useEffect(()=>{
    (async () => {
      const res = await getAPI('/teacher/courses');
      setData(res?.data?.data);
    })()
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Courses</h1>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
        <Link href={`/teacher/courses/new`}>
        <div
          className="dark:shadow-gray-700 cursor-pointer p-5 rounded-xl flex justify-center items-center shadow hover:shadow-lg transition"
        >
          <h2 className="text-[15vw] text-mist-400 dark:text-gray-600 font-extralight">+</h2>
        </div>
        </Link>
        {data && data?.length > 0 && data.map((cls) => (
          <div
            key={cls?.id}
            className="dark:shadow-gray-700 p-5 rounded-xl shadow hover:shadow-lg transition"
          >
          <Link href={`/teacher/courses/${cls?.id}`}>
            {/* Class Name */}
            <h2 className="text-lg font-semibold">{cls?.title}</h2>

            {/* Subject */}
            <p className="text-gray-500 mb-2">{cls.level}</p>

            {/* Students */}
            <p className="text-sm mb-1">
              👨‍🎓 Students: {20}
            </p>

            {/* Actions */}
            <div className="flex gap-2 flex-wrap">
              <Button className="bg-blue-500 text-white px-3 py-1 rounded">
                View Students
              </Button>

              <Button className="bg-green-500 text-white px-3 py-1 rounded">
                Add Assignment
              </Button>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}