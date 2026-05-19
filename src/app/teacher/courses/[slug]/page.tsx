import BackButton from "@/components/backButton";
import Editor from "@/components/Editor";
import { ParamsType, SearchParamsType } from "@/lib/type";

export default async function CourseEdit({ params, searchParams }: ParamsType & SearchParamsType ) {
    const { slug } = await params;
    const { q } = await searchParams;

    return (
        <div>
            <BackButton title={`${q}`} />
            <Editor id={parseInt(slug)}/>
        </div>
    )
}