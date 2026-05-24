"use client"
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

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

export default function CourseCard({cls, url} : { cls: CoursesType, url: string}){
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    return (
        <div
        key={cls?.id}
        className="dark:shadow-gray-700 rounded-xl shadow hover:shadow-lg transition flex flex-col h-full lg:h-100 not-md:group overflow-hidden"
        >
        <Link href={url} className="flex flex-col gap-1 h-full">
            <div className="rounded-xl border overflow-hidden min-h-[65px] md:min-h-33 h-auto flex items-center shadow hover:shadow-lg transition dark:shadow-gray-700">
            { cls?.cover_image &&
                <img src={cls?.cover_image} alt="no-image" className="w-full h-full"/>
            }
            </div>
            <div className="flex p-2 flex-col m-2 h-full place-content-evenly">
                {/* Class Name */}
                <h2 className="text-lg font-semibold capitalize">{cls?.title}</h2>

                {/* Subject */}
                <p className="text-gray-500 mb-2 capitalize">level:<br></br>{cls.level}</p>
                
                {/* Category */}
                <p className="text-gray-500 mb-2 capitalize">Category: {cls?.category}</p>

                {/* Teacher */}
                <p className="text-gray-500 mb-2 capitalize">Teacher: {cls?.teacher?.name}</p>
            </div>

        </Link>
        </div>
    )
}