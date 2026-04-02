"use client"
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ui/darkModeToggle";
import { ChangeEvent, FormEvent, FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import LoginModal from "@/app/(public)/LoginModal";


export default function Navbar(){
    return (
        <div className="flex items-center py-2 w-full px-2">
            <h2 className="md:text-4xl not-sm:text-xl font-semibold">Edducator</h2>
            
            <SearchBar />

            <div className="ml-auto flex gap-3">
                <div className="mr-2 hidden lg:block">
                    <ModeToggle />
                </div>
                <LoginModal/>
            </div>
        </div>
    )
}

type SearchType = {
    search: string;
}
export function SearchBar(){
    
    const route = useRouter();
    const { register, handleSubmit } = useForm<SearchType>();

    const handleSearch = (data: SearchType)=>{
        // console.log(data);
        if(!data.search.trim()) return;

        route.push(`/course?q=${data.search.trim().replaceAll(' ','+')}`)
    }

    return(
        <div className="mx-3 md:mx-8">
            <form onSubmit={handleSubmit(handleSearch)}>
                <input {...register('search')} className="bg-transparent not-sm:w-40 md:w-80 lg:w-100 rounded-md outline-none shadow shadow-zinc-700 py-1 px-2 md:py-2 md:px-4 flex-wrap  md:text-xl" placeholder="Search Courses...." type="text" />
            </form>
        </div>
    )
}