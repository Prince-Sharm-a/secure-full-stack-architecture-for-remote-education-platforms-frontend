"use client"
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { Button } from "./ui/button";
import { Dot, Plus } from "lucide-react";

const ReactQuill = dynamic(()=>import("react-quill-new"),{ssr:false});

export default function Editor(){
    const { register, handleSubmit } = useForm();
    const [ content, setContent ] = useState("");
    const [ coverImage, setCoverImage ] = useState("");
    const [ status, setStatus ] = useState("rejected");

    const onFormSubmit = (data : any)=>{

    }
    return (
        <div>
            <div className="flex gap-4">
                <select className="font-bold text-xl dark:bg-black border px-3 py-2 rounded-sm ml-auto" disabled={status === 'rejected'} defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value='draft' >Draft</option>
                    <option value='published' >Publish</option>
                </select>
                <Button variant={"ghost"} className="bg-cyan-600">Save</Button>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-3 h-full gap-4">
                <div className="h-full relative">
                    <ImageUpload setCoverImage={setCoverImage} />
                    <div className="ml-auto flex items-center absolute right-0 bottom-0 bg-gray-400/20 rounded-full"><Dot className={`${status === 'published' ? 'blink text-emerald-500' : status === 'rejected' ? 'blink text-red-500' : 'text-gray-400'}`} size={40} /></div>
                </div>
                <div className="col-span-2 space-y-4">
                <label htmlFor="title" className="text-2xl font-bold">Title</label>
                <input required {...register('title')} type="text" className="font-bold text-xl border px-3 py-2 rounded-sm w-full" placeholder="Enter The Post Title..."/>
                <div>
                <label htmlFor="level" className="text-2xl font-bold">Level</label>
                <div className="flex space-x-4 items-center px-2">
                    <select {...register('levelFrom')} className="font-bold text-xl dark:bg-black border px-3 py-2 rounded-sm w-full">
                        <option value='beginner' >beginner</option>
                        <option value='intermediate' >intermediate</option>
                        <option value="advanced">advanced</option>
                    </select>
                    <span className="text-2xl">to</span>
                    <select {...register('levelTo')} className="font-bold text-xl dark:bg-black border px-3 py-2 rounded-sm w-full" defaultValue={'intermediate'}>
                        <option value='beginner' >beginner</option>
                        <option value='intermediate' >intermediate</option>
                        <option value="advanced">advanced</option>
                    </select>
                </div>
                </div>
                <label htmlFor="category" className="text-2xl font-bold">Category</label>
                <input required {...register('category')} type="text" className="font-bold text-xl border px-3 py-2 rounded-sm w-full" placeholder="Enter Category..."/>
                </div>
                </div>
                <ReactQuill 
                value={content} 
                onChange={setContent}
                modules={{
                    toolbar:[
                        [{header:"1"},{header:"2"},{header:"3"}],
                        [{size:[]}],
                        ["bold","italic","underline","strike"],
                        [{list:"ordered"},{list:"bullet"}],
                        ["link","image","code-block"]
                    ]
                }}
                formats={[
                    "header",
                    "font",
                    "size",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "list",
                    "link",
                    "image",
                    "code-block"
                ]}
                />
            </form>
            <div className="mt-4 flex">
                <h2 className="text-2xl font-bold">Modules</h2>
                <Button variant={'ghost'} className="flex ml-auto"><Plus /></Button>
            </div>
        </div>
    )
}