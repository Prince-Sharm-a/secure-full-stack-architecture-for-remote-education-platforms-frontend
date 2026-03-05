"use client"
import { stat } from "fs";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type BannerType = {
    image: string;
    url: string;
}


export default function BannerImage(){
    const bannersContent: BannerType[] = [
        {
            image:"https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small/abstract-polygonal-banner-background.jpg",
            url:""
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZHjnMx6ST2d0Dh8vHhDkepSBq8v0cDbF-g&s",
            url:""
        },
        {
            image:"https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small/abstract-polygonal-banner-background.jpg",
            url:""
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZHjnMx6ST2d0Dh8vHhDkepSBq8v0cDbF-g&s",
            url:""
        },
    ]

    useEffect(()=>{
        const interval = setInterval(()=>{
            toggleBanner(1)
        },5000)

        return ()=>clearInterval(interval);
    },[])

    const [bannerIndex,setBannerIndex] = useState<number>(0);

    const toggleBanner = (change:number)=>{
        setBannerIndex(prev => {
            if(prev === 0 && change < 0) return bannersContent.length-1;
            else if(prev === bannersContent.length-1 && change > 0) return 0;

            return prev + change
        })
    }

    return (
        <div className="flex ">
            <button onClick={()=>toggleBanner(-1)} className="absolute top-0 bottom-0 m-auto -left-10 cursor-pointer hover:bg-zinc-600/10 z-100"><ChevronLeft className="h-40 w-40 text-zinc-800/30" /></button>
            
            {
                bannersContent.map((banner: BannerType,index: number)=>
                    bannerIndex === index ? (
                        <Link href={''} className="" key={index}>
                            <Image src={banner.image} fill alt="Testing Banner" />
                        </Link>
                    ) : (
                        <div key={index}></div>
                    )
                )
            }
            <button onClick={()=>toggleBanner(1)} className="absolute top-0 bottom-0 m-auto -right-10 cursor-pointer z-100 hover:bg-zinc-600/10"><ChevronRight className="h-40 w-40 text-zinc-800/30" /></button>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto flex flex-row">
                {
                    bannersContent.map((banner: BannerType,index: number)=>(
                        <Dot onClick={()=>setBannerIndex(index)} size={'30'} className={`cursor-pointer text-zinc-500/20 rounded-full ${index===bannerIndex ? 'bg-zinc-400/10' : ''}`} key={index} />
                    ))
                }
            </div>
        </div>
    )
}