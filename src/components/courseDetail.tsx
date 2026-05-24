"use client"
import { getAPI } from "@/lib/apiCall";
import { useEffect, useState } from "react";
import BuyCourseButton from "./button/buyButton";

type CourseDetailsType = {
    id: number,
    title: string,
    price: number,
    level: string,
    status: string,
    category: string,
    description: string,
    cover_image: string,
    teacher_id: number,
    name: string,
    profile_image: string,
    module: any
}

export default function CourseDetail({id}:{id:number}){
    const [ course_id, setCourseId] = useState<number>(id);
    const [ courseDetails, setCourseDetails ] = useState<CourseDetailsType | any>("");

    useEffect(()=>{
        if(!course_id) return;
        (async ()=>{
            const { data } = await getAPI(`/courses/${course_id}`)
            setCourseDetails(data);
        })()
    },[])
    return (
        <div>
            <div>
                <BuyCourseButton courseId={course_id} courseTitle={courseDetails.title} />
            </div>
            <div>

            </div>
            <div>
                
            </div>
        </div>
    )
}