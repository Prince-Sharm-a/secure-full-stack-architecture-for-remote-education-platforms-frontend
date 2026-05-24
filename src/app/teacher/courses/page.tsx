"use client"
import TeacherCourseCard from "@/components/card/teacherCourseCard";
import { Button } from "@/components/ui/button";
import { getAPI } from "@/lib/apiCall";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type CoursesType = {
  id: number;
  title: string;
  level: string;
  category: string;
  students?: number;
  cover_image:string;
};

export default function TeacherCourses() {
  const [data, setData] = useState<CoursesType[]>([]);
  
  useEffect(()=>{
    (async () => {
      const res = await getAPI('/teacher/courses');
      setData(res?.data?.data);
    })()
  },[]);

  return (
    <div>
      <div className="flex">
        <h1 className="text-2xl font-bold mb-6">Courses</h1>
        <Link href={`/teacher/courses/new`} className="flex ml-auto md:hidden">
          <Button variant={"outline"} className="">Add New</Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 space-x-1 gap-4 w-full h-auto">
        <Link href={`/teacher/courses/new`} className="not-md:hidden">
        <div
          className="dark:shadow-gray-700 not-md:hidden cursor-pointer p-5 rounded-xl flex justify-center items-center shadow hover:shadow-lg transition"
        >
          <h2 className="text-[15vw] text-mist-400 hover:text-shadow-2xs dark:text-shadow-mist-400 text-shadow-gray-600 dark:text-gray-600 font-extralight">+</h2>
        </div>
        </Link>
        {data && data?.length > 0 && data.map((cls) => (
          <TeacherCourseCard cls={cls} key={cls.id}/>
        ))}
      </div>
    </div>
  );
}