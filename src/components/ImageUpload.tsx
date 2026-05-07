"use client"
import { supabase } from "@/lib/supabaseClient";
import { Check, UploadIcon, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import Cropper, { Area } from "react-easy-crop";

type CropModalProps = {
  image: string;
  onClose: () => void;
  onSave: (croppedImage: string) => void;
}

const getCroppedImg = (imageSrc: string, crop: Area): Promise<string> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.crossOrigin = "anonymous";

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if(!ctx){
        reject("Canvas context is null");
        return;
      }

      canvas.width = crop.width;
      canvas.height = crop.height;

      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );

      resolve(canvas.toDataURL("image/jpeg"));
    };
    image.onerror = () => reject("Image load failed");
  });
};

export default function ImageUpload({coverImage,setCoverImage} : {coverImage:string ,setCoverImage : (coverImage:string) => void}){
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>(coverImage ? coverImage : "");
    const [ loading, setLoading ] = useState(false);
    const [showCrop, setShowCrop] = useState(false);

    const handleImageChange= async (e: React.ChangeEvent<HTMLInputElement>)=>{
        const image = e.target.files?.[0];
        if(image){
            setFile(image);
            const previewUrl = URL.createObjectURL(image);
            setPreview(previewUrl);
            setShowCrop(true);
        }
        // console.log(e.target.files[0])
    }
    
    const uploadToSupaBase = async (image : File)=>{
        setLoading(true);
        // console.log(image)
        const imageName = `${image.name.replace(/[^a-zA-Z0-9.-]/g, "_")}-${Date.now()}`;
        // const storageRef = ref(storage,`images/${image.name}`)
        try{
            // await uploadBytes(storageRef,image);
            const { error } = await supabase.storage.from("images").upload(imageName, image);
            if(error){
                toast.error(`${error.message}`)
                console.log(error)
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

    const handleUpload = async () => {
        if(!file) return ;

        uploadToSupaBase(file);
    };

    const handleSave = async (croppedImage: string) => {
        if (!croppedImage) return ;

        setPreview(croppedImage);
        setShowCrop(false)
    }

    return (
        <div className="flex gap-x-4 h-full">
            <div className="w-full h-full relative">
                <label className="cursor-pointer w-60">
                    <span 
                    style={{backgroundImage:`${preview ? `url(${preview})` : 'none'}`,backgroundSize:"cover",backgroundPosition:"center"}} 
                    className="border flex gap-1 flex-wrap relative text-black text-[2vw] font-bold border-gray-400 border-dashed h-full bg-gray-500/8 dark:bg-mist-200/30 justify-center items-center rounded">
                        
                        {
                            !preview ? <div className="flex flex-col items-center m-1">
                            Upload Cover Image
                            <UploadIcon />
                            </div> : <>
                            </>
                        }
                    </span>
                    <input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} hidden disabled={loading} />
                </label>
                {
                    !coverImage && preview && <>
                    <Button onClick={handleUpload} className="absolute rounded-full left-0 top-0 hover:text-emerald-400 bg-gray-400/20" variant={"link"} ><Check size={50} /></Button>
                    <Button 
                    onClick={()=>{
                        setPreview("");
                        setFile(null);
                        setShowCrop(false);
                    }} 
                    className="absolute rounded-full right-0 top-0 hover:text-red-500 bg-gray-400/20" variant={"link"}
                    >
                        <X size={100}/>
                    </Button>
                    </>
                }
            </div>
            {showCrop && (
                <CropModal
                image={preview}
                onClose={() => setShowCrop(false)}
                onSave={handleSave}
                />
            )}
        </div>
    )
}


export function CropModal({ image, onClose, onSave }: CropModalProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleSave = async () => {
    if(!croppedAreaPixels) return;
    
    const croppedImage = await getCroppedImg(image, croppedAreaPixels);
    onSave(croppedImage);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"  onClick={onClose}>
      <div className="bg-white dark:bg-black px-4 rounded w-[500px] pb-4 space-y-4" onClick={(e)=>e.stopPropagation()}>
        <div className="flex justify-between mt-2">
          <Button onClick={onClose} className="ml-auto" variant={"link"}><X className="text-red-500" size={60} /></Button>
        </div>
        <div className="w-full h-[350px] relative overflow-hidden">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={16 / 9} // 👈 IMPORTANT for course card
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
        </div>
        <div className="flex justify-between mt-2">
          <Button onClick={handleSave} variant={"outline"} className="bg-blue-500 dark:bg-blue-500 cursor-pointer ml-auto px-3 py-1 rounded-x">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}