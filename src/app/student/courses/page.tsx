"use client"
import CourseCard from "@/components/card/courseCard";
import { getAPI } from "@/lib/apiCall";
import { useEffect, useState } from "react";

type CourseType = {
  id: number;
  teacher_id: number;
  title: string;
  level: string;
  category: string;
  cover_image:string;
  teacher: {
    id: number;
    name: string;
  }
};

export default function CoursesPage() {
  const [ courses, setCourses ] = useState<CourseType[]>([]);

  useEffect(()=>{
    (async () =>{
      const { data } = await getAPI('/student/courses');
      console.log(data);
      setCourses(data);
    })()
  },[])
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 space-x-1 gap-4 w-full h-auto">
        {courses.map((course) => (
          <CourseCard cls={course} key={course.id} url={`/my-course/${course?.id}?q=${course?.title}`} />
        ))}
      </div>
    </div>
  );
}