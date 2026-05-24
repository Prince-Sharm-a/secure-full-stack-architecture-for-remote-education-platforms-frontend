"use client"
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

type CoursesType = {
  id: number;
  title: string;
  level: string;
  category: string;
  students?: number;
  cover_image:string;
};

export default function TeacherCourseCard({cls} : { cls: CoursesType}){
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    return (
        <div
        key={cls?.id}
        className="relative dark:shadow-gray-700 rounded-xl shadow hover:shadow-lg transition flex flex-col h-full lg:h-100 not-md:group overflow-hidden"
        >
        <Link href={`/teacher/courses/${cls?.id}?q=${cls?.title}`} className="h-full flex flex-col gap-1">
            <div className="rounded-xl border overflow-hidden min-h-[65px] md:min-h-33 h-auto flex items-center shadow hover:shadow-lg transition dark:shadow-gray-700">
            { cls?.cover_image &&
                <img src={cls?.cover_image} alt="no-image" className="w-full h-full"/>
            }
            </div>
            <div className="flex p-2 flex-1 flex-col m-2 place-content-evenly">
            {/* Class Name */}
            <h2 className="text-lg font-semibold capitalize">{cls?.title}</h2>

            {/* Subject */}
            <p className="text-gray-500 mb-2 capitalize">Level:<br></br>{cls.level}</p>

            {/* Category */}
            <p className="text-gray-500 mb-2 capitalize">Category: {cls?.category}</p>

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
                <Link href={`/teacher/students?course_id=${cls.id}`} className="flex-1">
                    <Button className="w-full dark:border-blue-500 border-blue-500 text-xs px-1 py-1 whitespace-normal rounded cursor-pointer" variant={'outline'}>
                        View Students
                    </Button>
                </Link>
                
                <Link href={`/teacher/assignments/${cls.id}`} className="flex-1">
                    <Button className="w-full dark:border-green-500 border-green-500 text-xs px-3 whitespace-normal py-1 rounded cursor-pointer" variant={'outline'}>
                        Add Assignment
                    </Button>
                </Link>
            </div>
            </div>
        </div>
        </div>
    )
}