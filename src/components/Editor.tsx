"use client"
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import ImageUpload from "./upload/ImageUpload";
import { Button } from "./ui/button";
import { ChevronDown, ChevronRight, Dot, Plus, UploadIcon } from "lucide-react";
import { getAPI, postAPI, putAPI } from "@/lib/apiCall";

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
            // console.log(data);
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
            <div className="flex gap-4 mb-2">
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
                <div className="grid md:grid-cols-3 h-full gap-4 grid-cols-1 px-1 w-full justify-items-center">
                <div className="not-md:h-50 relative w-full">
                    <ImageUpload coverImage={coverImage} setCoverImage={setCoverImage} />
                    <div className="ml-auto flex items-center absolute right-0 bottom-0 bg-gray-400/20 rounded-full"><Dot className={`${status === 'published' ? 'blink text-emerald-500' : status === 'rejected' ? 'blink text-red-500' : 'text-gray-400'}`} size={40} /></div>
                </div>
                <div className="col-span-2 space-y-4">
                <label htmlFor="title" className="text-2xl font-bold">Title</label>
                <input required {...register('title')} type="text" className="capitalize font-bold text-xl border px-3 py-2 rounded-sm w-full" placeholder="Enter The Post Title..."/>
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
                <div className="grid grid-cols-2 space-x-4">                
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

type ModuleType = {
    id : number,
    course_id : number,
    title : string
}

function ModulesEditor({id, handleCourseId}:{id?:number | null, handleCourseId:() => Promise<any>}){
    const [ modules, setModules ] = useState<ModuleType[]>([]);
    const [ showCreate, setShowCreate ] = useState(false);

    useEffect(()=>{
        if(!id) return ;
        (async ()=>{
            const { data } = await getAPI(`/courses/${id}/modules`);
            // console.log(data);
            setModules(data);
        })()
    },[id]);

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
                        setShowCreate(!showCreate)
                    }
                }}>
                    <Plus className="size-5 font-bold" />
                </Button>
            </div>
            <div className="border-t border-x dark:border-t-white dark:border-x-white py-4 rounded-t-4xl text-center">
                <table className="w-full ">
                    <thead>
                    <tr className="">
                        <th className="w-[10%] ">
                            S no.
                        </th>
                        <th className="w-[60%] ">
                            Title
                        </th>
                        <th className="w-[30%] ">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    { showCreate && (
                        <ModuleEditableRow setShowCreate={setShowCreate}  setModules={setModules} index={modules?.length} row={{course_id:id}} />
                        )
                    }
                    {
                        modules && modules?.length > 0 && modules.map((e,i) => (
                            <ModuleEditableRow setShowCreate={setShowCreate} setModules={setModules} key={e?.id} index={i} row={e}/>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function ModuleEditableRow({setShowCreate, setModules ,index, row}:{setShowCreate:(showCreate:boolean)=>void, setModules:React.Dispatch<React.SetStateAction<ModuleType[]>>, index:number, row?:{id?:number, course_id?: number | null, title?:string}}){
    const { register, handleSubmit } = useForm({defaultValues: { id:row?.id || '', course_id:row?.course_id, title:row?.title}});
    const [ expand, setExpand ] = useState(false);
    const [ lessons, setLessons ] = useState<LessonType[]>([]);

    const handleSave = async (payload: any) => {
        // console.log(payload);
        if(payload?.id){
            const { data } = await putAPI(`/teacher/modules/${payload?.id}`,{...payload})
        } else {
            const { data } = await postAPI(`/teacher/modules`,{...payload});
            setModules(prev => [...prev,data]);
            setShowCreate(false);
        }
    }

    return (
        <>
        <tr>
            <td  className="w-[10%] text-xl">
                {index+1}
            </td>
            <td className="w-[60%] px-4 py-2">
                <form onSubmit={handleSubmit(handleSave)}>
                {
                    row?.id && <input {...register('id')} type="number" className="hidden" />

                }
                <input {...register(`course_id`)} type="number" className="hidden" />
                <input {...register(`title`)} type="text" className="font-bold text-lg dark:bg-black border px-2 py-1 rounded-sm w-full" />
                <Button className="bg-cyan-600 hidden" >Save</Button>
                </form>
            </td>
            <td className="w-[30%] space-x-1 text-nowrap">
                <Button className="bg-cyan-600 text-xs h-8" onClick={handleSubmit(handleSave)} >Save</Button>
                <Button className="" onClick={()=>setExpand(!expand)}  variant={'ghost'}>
                    {
                        !expand ? <ChevronRight /> : <ChevronDown />
                    }
                </Button>
            </td>
        </tr>
        {
            expand && (
                <tr>
                    <td className="w-full" colSpan={3}>
                        {
                            row?.id &&
                            <LessonEditor module_id={row?.id} lessons={lessons} setLessons={setLessons} />
                        }
                    </td>
                </tr>
            )
        }
        </>
    )
}

type LessonType = {
    id : number,
    module_id : number,
    title : string
}

function LessonEditor({module_id, lessons, setLessons }:{module_id:number, lessons:LessonType[], setLessons:React.Dispatch<React.SetStateAction<LessonType[]>> }){
    const [ showCreate, setShowCreate ] = useState(false);

    useEffect(()=>{
        if(lessons.length > 0) return;
        (async ()=>{
            const { data } = await getAPI(`/modules/${module_id}/lessons`);
            console.log(data);
            setLessons(data);
        })()
    },[])
    return (
        <>
        <div className="border dark:border-white m-2 py-4 rounded-t-4xl text-center max-h-100 overflow-y-auto">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="w-[10%]">S no.</th>
                        <th className="w-[50%]">Title</th>
                        <th className="w-[35%]">Action</th>
                        <th className="w-[5%]">
                            <Button variant={'ghost'} className="cursor-pointer"
                            onClick={()=>{
                                if(module_id){
                                    setShowCreate(!showCreate);
                                }
                            }}
                            >
                                <Plus className="size-5 font-bold" />
                            </Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { showCreate && (
                        <LessonEditableRow setShowCreate={setShowCreate}  setLessons={setLessons} index={lessons?.length} row={{module_id:module_id}} />
                        )
                    }
                    {
                        lessons && lessons?.length > 0 && lessons.map((e,i) => (
                            <LessonEditableRow setShowCreate={setShowCreate} setLessons={setLessons} key={e?.id} index={i} row={e}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

function LessonEditableRow({setShowCreate, setLessons ,index, row}:{setShowCreate:(showCreate:boolean)=>void, setLessons:React.Dispatch<React.SetStateAction<LessonType[]>>, index:number, row?:{id?:number, module_id?: number | null, title?:string}}){
    const { register, handleSubmit } = useForm({defaultValues: { id:row?.id || '', module_id:row?.module_id, title:row?.title}});
    const [ expand, setExpand ] = useState(false);

    const handleSave = async (payload: any) => {
        // console.log(payload);
        if(payload?.id){
            const { data } = await putAPI(`/teacher/lessons/${payload?.id}`,{...payload})
        } else {
            const { data } = await postAPI(`/teacher/lessons`,{...payload});
            setLessons(prev => [...prev,data]);
            setShowCreate(false);
        }
    }
    
    return (
        <>
        <tr>
            <td  className="w-[10%] text-xl">
                {index+1}
            </td>
            <td className="w-[50%] px-4 py-2">
                <form onSubmit={handleSubmit(handleSave)}>
                {
                    row?.id && <input {...register('id')} type="number" className="hidden" />

                }
                <input {...register(`module_id`)} type="number" className="hidden" />
                <input {...register(`title`)} type="text" className="font-bold text-lg dark:bg-black border px-2 py-1 rounded-sm w-full" />
                <Button className="bg-cyan-600 hidden" >Save</Button>
                </form>
            </td>
            <td className="w-[40%] " colSpan={2}>
                <div className="w-ful flex justify-center space-x-1">
                    <Button className="text-xs h-8" variant={"outline"}><UploadIcon size={30} /></Button>
                    <Button className="bg-cyan-600 text-xs h-8" onClick={handleSubmit(handleSave)} >Save</Button>
                </div>
                {/* <Button className="" onClick={()=>setExpand(!expand)}  variant={'ghost'}>
                    {
                        !expand ? <ChevronRight /> : <ChevronDown />
                    }
                </Button> */}
            </td>
        </tr>
        </>
    )
}