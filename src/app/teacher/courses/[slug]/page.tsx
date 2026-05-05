import Editor from "@/components/Editor";
import { ParamsType } from "@/lib/type";

export default async function CourseEdit({ params }: ParamsType) {
    const { slug } = await params;

    

    return (
        <div>
            <Editor id={parseInt(slug)}/>
        </div>
    )
}