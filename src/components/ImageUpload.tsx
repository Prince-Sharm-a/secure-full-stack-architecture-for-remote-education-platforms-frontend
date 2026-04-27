"use client"
import { supabase } from "@/lib/supabaseClient";
import { Check, UploadIcon, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function ImageUpload({setCoverImage} : {setCoverImage : (coverImage:string) => void}){
    const [preview, setPreview] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [ loading, setLoading ] = useState(false);

    const handleImageChange= async (e: React.ChangeEvent<HTMLInputElement>)=>{
        const image = e.target.files?.[0];
        if(image){
            setFile(image);
            const previewUrl = URL.createObjectURL(image);
            setPreview(previewUrl);
        }
        // console.log(e.target.files[0])
    }
    const uploadToSupaBase = async (image : File)=>{
        setLoading(true);
        // console.log(image)
        const imageName = `${image.name}-${Date.now()}`;
        // const storageRef = ref(storage,`images/${image.name}`)
        try{
            // await uploadBytes(storageRef,image);
            const { error } = await supabase.storage.from("images").upload(imageName, image);
            if(error){
                toast.error(`${error.message}`)
                setLoading(false)
                return
            }
            // const url = await getDownloadURL(storageRef)
            const { data } = supabase.storage.from("images").getPublicUrl(imageName);
            setCoverImage(data.publicUrl);
            toast.success(`Image Uploaded`)
            console.log(data)
        } catch(error){
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            toast.error(`ERROR:${errorMessage}`);
            console.error(errorMessage);
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex gap-x-4 h-full">
            <div className="w-full h-full">
                <label className="cursor-pointer w-60">
                    <span 
                    style={{backgroundImage:`${preview ? `url(${preview})` : 'none'}`,backgroundSize:"cover",backgroundPosition:"center"}} 
                    className="border flex gap-4 flex-wrap relative text-black text-[2vw] font-bold border-gray-400 border-dashed h-full bg-gray-500/8 dark:bg-mist-200/30 justify-center items-center rounded">
                        
                        {
                            !preview ? <>
                            Upload Cover Image
                            <UploadIcon />
                            </> : <>
                            <Button className="absolute rounded-full right-0 top-0 hover:text-red-500" variant={"link"} ><X /></Button>
                            <Button className="absolute rounded-full left-0 top-0 hover:text-emerald-400" variant={"link"} ><Check /></Button>
                            </>
                        }
                    </span>
                    <input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} hidden disabled={loading} />
                </label>
            </div>
        </div>
    )
}