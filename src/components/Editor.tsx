"use client"
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageUpload from "./ImageUpload";

const ReactQuill = dynamic(()=>import("react-quill-new"),{ssr:false});

export default function Editor(){
    const { register, handleSubmit } = useForm();
    const [ content, setContent ] = useState("");
    const [ coverImage, setCoverImage ] = useState("");

    const onFormSubmit = (data : any)=>{

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-3 h-full gap-4">
                <div className="h-full">
                    <ImageUpload setCoverImage={setCoverImage} />
                </div>
                <div className="col-span-2 space-y-4">
                <label htmlFor="title" className="text-2xl font-bold">Title</label>
                <input required {...register('title')} type="text" className="font-bold text-xl border px-3 py-2 rounded-sm w-full" placeholder="Enter The Post Title..."/>
                <div>
                <label htmlFor="level" className="text-2xl font-bold">Level</label>
                <div className="flex space-x-4 items-center px-2">
                    <select className="font-bold text-xl border px-3 py-2 rounded-sm w-full">
                        <option value='beginner' >beginner</option>
                        <option value='intermediate' >intermediate</option>
                        <option value="advanced">advanced</option>
                    </select>
                    <span className="text-2xl">to</span>
                    <select className="font-bold text-xl border px-3 py-2 rounded-sm w-full" defaultValue={'intermediate'}>
                        <option value='beginner' >beginner</option>
                        <option value='intermediate' >intermediate</option>
                        <option value="advanced">advanced</option>
                    </select>
                </div>
                </div>
                <label htmlFor="category    " className="text-2xl font-bold">Category</label>
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
        </div>
    )
}