"use client"
import { Button } from "@/components/ui/button";
import { getAPI } from "@/lib/apiCall";
import { ChevronDown, ChevronRight } from "lucide-react";
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
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
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
          <div
            key={cls?.id}
            className="relative dark:shadow-gray-700 rounded-xl shadow hover:shadow-lg transition flex flex-col h-full lg:h-100 not-md:group overflow-hidden"
          >
            <Link href={`/teacher/courses/${cls?.id}`} className="h-full">
              <div className="rounded-xl border overflow-hidden min-h-[65px] md:min-h-33 h-auto flex items-center shadow hover:shadow-lg transition dark:shadow-gray-700">
                { cls?.cover_image &&
                  <img src={cls?.cover_image} alt="no-image" className="w-full h-full"/>
                }
              </div>
              <div className="flex p-2 mt-auto flex-col  m-2">
                {/* Class Name */}
                <h2 className="text-lg font-semibold">{cls?.title}</h2>

                {/* Subject */}
                <p className="text-gray-500 mb-2">{cls.level}</p>

                {/* Students */}
                <p className="text-sm mb-1">
                  👨‍🎓 Students: {20}
                </p>
              </div>

            </Link>
            {/* Actions */}
            <div className="px-1 flex flex-col">
              <div className="p-1 md:hidden flex">
                <h3>Actions</h3>
                <button 
                className="flex ml-auto" 
                onClick={()=>{
                  if(expandedCard == cls.id){
                    setExpandedCard(0);
                  } 
                  else setExpandedCard(cls.id)
                }}>
                { expandedCard !== cls.id ? <ChevronRight /> : <ChevronDown />}
                </button>
              </div>
              <div className={`
                  not-md:overflow-hidden
                  not-md:transition-all
                  not-md:duration-300

                  ${
                    expandedCard === cls.id
                      ? "opacity-100 p-2 pt-0"
                      : "not-md:opacity-0 not-md:hidden"
                  }
                `}>
                <div className="flex gap-1 not-md:flex-col pb-2 px-2">
                  <Link href={"/teacher/students"} className="flex-1">
                  <Button className="w-full dark:border-blue-500 border-blue-500 text-xs px-1 py-1 whitespace-normal rounded cursor-pointer" variant={'outline'}>
                    View Students
                  </Button>
                  </Link>
                  
                  <Link href={"/teacher/assignments"} className="flex-1">
                  <Button className="w-full dark:border-green-500 border-green-500 text-xs px-3 whitespace-normal py-1 rounded cursor-pointer" variant={'outline'}>
                    Add Assignment
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}