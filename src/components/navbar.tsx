"use client"
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ui/darkModeToggle";
import { ChangeEvent, FormEvent, FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";


export default function Navbar(){
    return (
        <div className="flex items-center py-2 w-full md:px-8 px-2">
            <h2 className="md:text-4xl font-semibold">Educator</h2>
            
            <SearchBar />

            <div className="ml-auto flex gap-3">
                <div className="mr-2 hidden md:block">
                    <ModeToggle />
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

        route.push(`/product?q=${data.search.trim().replaceAll(' ','+')}`)
    }

    return(
        <div className=" ml-[5%] md:ml-[10%]">
            <form onSubmit={handleSubmit(handleSearch)}>
                <input {...register('search')} className="bg-transparent lg:w-100 rounded-md outline-none shadow shadow-zinc-700 p-1 flex-wrap md:p-2 md:text-xl" placeholder="Search for Products" type="text" />
            </form>
        </div>
    )
}