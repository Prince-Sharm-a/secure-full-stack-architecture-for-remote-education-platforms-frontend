"use client"
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";
import { Button } from "./ui/button";
import { Dot, Plus } from "lucide-react";
import { getAPI, postAPI, putAPI } from "@/lib/apiCall";
import { title } from "process";

const ReactQuill = dynamic(()=>import("react-quill-new"),{ssr:false});

export default function Editor({id}:{id?:number}){
    const { register, handleSubmit, setValue } = useForm({defaultValues:{'id':id,'title':'','price':0,'levelFrom':'beginner','levelTo':'intermediate','category':''}});
    const [ content, setContent ] = useState("");
    const [ coverImage, setCoverImage ] = useState("");
    const [ status, setStatus ] = useState("draft");
    const [ initialData, setInitialData ] = useState<any>({});
    const [ courseId, setCourseId ] = useState<number | null>(id ? id : null);

    useEffect(()=>{
        if(id){
            (async () => {
            const {data} = await getAPI(`/teacher/courses/${id}`);
            console.log(data);
            setInitialData({
                id: data?.id,
                title: data?.title,
                levelFrom: data?.level?.split(" ")[0],
                levelTo: data?.level?.split(" ")[2],
                price: data?.price,
                category: data?.category,
                status: data?.status,
                description: data?.description,
                cover_image: data?.cover_image
            });
            setContent(data?.description);
            setStatus(data?.status);
            setCoverImage(data?.cover_image);
            setValue("id", data?.id);
            setValue("title", data?.title);
            setValue("price", data?.price);
            setValue("levelFrom", data?.level?.split(" ")[0]);
            setValue("levelTo", data?.level?.split(" ")[2]);
            setValue("category", data?.category);
            })()
        }
    },[id]);

    const onFormSubmit = async (payload : any)=>{
        // console.log(JSON.stringify(initialData),JSON.stringify({...payload,status:status,description:content,cover_image:coverImage}));
        // console.log(JSON.stringify(initialData) === JSON.stringify({...payload,status:status,description:content,cover_image:coverImage}));
        // return ;
        if(JSON.stringify(initialData) === JSON.stringify({...payload,status:status,description:content,cover_image:coverImage})){
            return courseId;
        }
        if(payload?.id){
            const { data } = await putAPI(`/teacher/courses/${payload?.id}`,{...payload,status,description:content,cover_image:coverImage});
            setInitialData({
                id: data?.id,
                title: data?.title,
                price: data?.price,
                levelFrom: data?.level?.split(" ")[0],
                levelTo: data?.level?.split(" ")[2],
                category: data?.category,
                status: data?.status,
                description: data?.description,
                cover_image: data?.cover_image
            });
        } else{
            const { data } = await postAPI(`/teacher/courses`,{...payload,status,description:content,cover_image:coverImage});
            setValue("id", data?.id);
            setCourseId(data?.id);
            return data?.id;
        }
    }

    return (
        <div>
            <div className="flex gap-4">
                <select 
                className="font-bold text-xl dark:bg-black border px-3 py-2 rounded-sm ml-auto" 
                disabled={status === 'rejected'} 
                value={status} 
                onChange={(e) => {
                    setStatus(e.target.value)
                }}>
                    <option value='draft' >Draft</option>
                    <option value='published' >Publish</option>
                </select>
                <Button variant={"ghost"} onClick={handleSubmit(onFormSubmit)} className="bg-cyan-600">Save</Button>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
                {
                    id && <input {...register('id')} className="hidden" />
                }
                <div className="grid md:grid-cols-3 h-full gap-4">
                <div className="h-full relative">
                    <ImageUpload coverImage={coverImage} setCoverImage={setCoverImage} />
                    <div className="ml-auto flex items-center absolute right-0 bottom-0 bg-gray-400/20 rounded-full"><Dot className={`${status === 'published' ? 'blink text-emerald-500' : status === 'rejected' ? 'blink text-red-500' : 'text-gray-400'}`} size={40} /></div>
                </div>
                <div className="col-span-2 space-y-4">
                <label htmlFor="title" className="text-2xl font-bold">Title</label>
                <input required {...register('title')} type="text" className="font-bold text-xl border px-3 py-2 rounded-sm w-full" placeholder="Enter The Post Title..."/>
                <div>
                <label htmlFor="level" className="text-2xl font-bold">Level</label>
                <div className="flex space-x-4 items-center px-2">
                    <select {...register('levelFrom')} className="font-bold text-xl dark:bg-black border px-3 py-2 rounded-sm w-full">
                        <option value='beginner' >Beginner</option>
                        <option value='intermediate' >Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                    <span className="text-2xl">to</span>
                    <select {...register('levelTo')} className="font-bold text-xl dark:bg-black border px-3 py-2 rounded-sm w-full">
                        <option value='beginner' >Beginner</option>
                        <option value='intermediate' >Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                </div>
                <div className="md:grid md:grid-cols-2 space-x-4">                
                <label htmlFor="price" className="text-2xl font-bold">Price
                <input required {...register('price')} defaultValue={0} type="text" className="font-bold text-xl border px-3 py-2 rounded-sm w-full" placeholder="Enter Price..."/>
                </label>
                <label htmlFor="category" className="text-2xl font-bold">Category
                <input required {...register('category')} type="text" className="font-bold text-xl border px-3 py-2 rounded-sm w-full" placeholder="Enter Category..."/>
                </label>
                </div>
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
                <Button className="bg-cyan-600 hidden" >Save</Button>
            </form>
            <ModulesEditor id={courseId} handleCourseId={handleSubmit(onFormSubmit)}/>
        </div>
    )
}

function ModulesEditor({id, handleCourseId}:{id?:number | null, handleCourseId:() => Promise<any>}){
    const [ modules, setModules ] = useState([{id:1,course_id:1,title:'testing'}]);
    const [ showCreate, setShowCreate ] = useState(false);

    return (
        <div className="mt-4 flex flex-col">
            <div className="flex">
                <h2 className="text-2xl font-bold">Modules</h2>
                <Button variant={'ghost'} className="flex ml-auto cursor-pointer" onClick={async ()=>{
                    let finalCourseId = id;
                    if(!id){
                        finalCourseId = await handleCourseId();
                    }
                    if(finalCourseId){
                        setShowCreate(true)
                    }
                }}>
                    <Plus className="size-5 font-bold" /></Button>
            </div>
            <div className="border-t border-x dark:border-t-white dark:border-x-white py-4 rounded-t-4xl text-center">
                <table className="w-full ">
                    <thead>
                    <tr className="">
                        <th className="w-[10%] ">
                            S no.
                        </th>
                        <th className="w-[70%] ">
                            Title
                        </th>
                        <th className="w-[20%] ">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    { showCreate && (
                        <EditableRow index={modules.length} row={{course_id:id}} />
                        )
                    }
                    {
                        modules && modules?.length > 0 && modules.map((e,i) => (
                            <EditableRow key={e.id} index={i} row={(e)}/>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function EditableRow({index, row}:{index:number, row?:{id?:number, course_id?: number | null, title?:string}}){
    const { register, handleSubmit } = useForm({defaultValues: { id:row?.id || '', course_id:row?.course_id, title:row?.title}});

    const handleSave = (payload: any) => {
        console.log(payload);
    }

    return (
        <tr>
            <td  className="w-[10%] text-xl">
                {index+1}
            </td>
            <td className="w-[70%] px-4 py-2">
                <form onSubmit={handleSubmit(handleSave)}>
                {
                    row?.id && <input {...register('id')} type="number" className="hidden" />

                }
                <input {...register(`course_id`)} type="number" className="hidden" />
                <input {...register(`title`)} type="text" className="font-bold text-lg dark:bg-black border px-2 py-1 rounded-sm w-full" />
                <Button className="bg-cyan-600 hidden" >Save</Button>
                </form>
            </td>
            <td className="w-[20%]">
                <Button className="bg-cyan-600" onClick={handleSubmit(handleSave)} >Save</Button>
            </td>
        </tr>
    )
}