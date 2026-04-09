"use client"

import { useEffect, useState } from "react";

type Placeholder = string[]

export default function HomeSearchBar(){
    const placeholder : Placeholder = [
        "Learn Python, Java, C++",
        "Complete Interview Preparation",
        "Data Structures And Algorithm",
        "Edducator Courses",
        "Neet Preparation",
        "Jee Preparation",
        "Board Preparation",
        "Class 10 Sample Papers",
        "Class 12 Sample Papers",
        "Jee Sample Questions Bank",
        "Neet Sample Questions Bank",
    ];

    const [ placeholderIndex, setIndex ] = useState(0);
    useEffect(()=>{

    },[]);
    return (
        <div>
            <input 
                type="text" 
                className="bg-transparent w-200 not-sm:w-70 rounded-md outline-none shadow shadow-zinc-700 py-1 px-3 md:py-2 md:px-5 md:text-xl" 
                placeholder=""
            />
        </div>
    )
}