"use client"
import CourseCard from "@/components/card/courseCard";
import { getAPI } from "@/lib/apiCall";
import { useEffect, useState } from "react";

type CoursesType = {
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

export default function PublicCourses(){
    const [ courses, setCourses] = useState<CoursesType[]>([])

    useEffect(()=>{
        (async ()=>{
            const { data } = await getAPI(`/courses`);
            console.log(data?.data);
            setCourses(data?.data);
        })()
    },[]);
    return (
        <div className="justify-items-center my-10 mx-3 not-md:my-5">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 space-x-1 gap-4 w-full h-auto">
                {
                    courses?.length > 1 && courses.map((cls,i) => (
                        <CourseCard cls={cls} key={cls.id} url={`/courses/${cls?.id}?q=${cls?.title}`} />
                    ))
                }
            </div>            
        </div>
    )
}