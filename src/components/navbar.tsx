"use client"
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ui/darkModeToggle";
import { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import LoginModal from "@/components/LoginModal";
import { SidebarTrigger } from "./ui/sidebar";
import Avatar from "./avatar";
import { useAuth } from "@/context";

export default function Navbar({ isAuth, isRole }: { isAuth?: string | null, isRole?: string }){
    const {isLogin, setIsLogin} = useAuth();

    return (
        <div className="flex items-center py-2 w-full px-2 bg-mist-200/90 dark:bg-zinc-900/90">
            <SidebarTrigger className="cursor-pointer lg:hidden" />
            <h2 className="md:text-4xl not-sm:text-xl font-semibold">Edducator</h2>
            
            <SearchBar />

            <div className="ml-auto flex mr-5">
                <div className="mr-2 hidden lg:block">
                    <ModeToggle />
                </div>
                <div className="hidden lg:block">
                    {!isLogin && 
                        <>
                        <LoginModal />
                        </>
                    }
                </div>
                <div>
                    {isLogin && <Avatar />}
                </div>
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
            <div className="md:hidden">
                <Button size={"icon"} variant={"outline"} className="rounded-full">
                    <Search className="size-4" />
                </Button>
            </div>
            <form onSubmit={handleSubmit(handleSearch)} className="not-md:hidden">
                <input {...register('search')} className="bg-mist-100 dark:bg-zinc-950 not-sm:w-40 md:w-80 lg:w-100 rounded-md outline-none shadow shadow-zinc-700 py-1 px-2 md:py-2 md:px-4 flex-wrap  md:text-xl" placeholder="Search Courses...." type="text" />
            </form>
        </div>
    )
}