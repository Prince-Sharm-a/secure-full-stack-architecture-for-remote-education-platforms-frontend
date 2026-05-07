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
  cover_image:string;
};

export default function TeacherCourses() {
  const [data, setData] = useState<CoursesType[]>([]);
  console.log(data);
  
  useEffect(()=>{
    (async () => {
      const res = await getAPI('/teacher/courses');
      setData(res?.data?.data);
    })()
  },[]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Courses</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 w-full">
        <Link href={`/teacher/courses/new`} className="not-md:hidden">
        <div
          className="dark:shadow-gray-700 not-md:hidden cursor-pointer p-5 rounded-xl flex justify-center items-center shadow hover:shadow-lg transition"
        >
          <h2 className="text-[15vw] text-mist-400 dark:text-gray-600 font-extralight">+</h2>
        </div>
        </Link>
        {data && data?.length > 0 && data.map((cls) => (
          <div
            key={cls?.id}
            className="dark:shadow-gray-700 rounded-xl shadow hover:shadow-lg transition"
          >
          <Link href={`/teacher/courses/${cls?.id}`}>
            <div className="rounded-xl border overflow-hidden h-[40%] flex items-center shadow hover:shadow-lg transition dark:shadow-gray-700">
              { cls?.cover_image &&
                <img src={cls?.cover_image} alt="no-image" className="w-full h-full"/>
              }
            </div>
            <div className="p-2">
            {/* Class Name */}
            <h2 className="text-lg font-semibold">{cls?.title}</h2>

            {/* Subject */}
            <p className="text-gray-500 mb-2">{cls.level}</p>

            {/* Students */}
            <p className="text-sm mb-1">
              👨‍🎓 Students: {20}
            </p>

            {/* Actions */}
            <div className="flex gap-2 ">
              <Button className="border-blue-500 text-xs text-white px-1 py-1 rounded cursor-pointer" variant={'outline'}>
                View Students
              </Button>

              <Button className="border-green-500 text-xs text-white px-3 py-1 rounded cursor-pointer" variant={'outline'}>
                Add Assignment
              </Button>
            </div>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}