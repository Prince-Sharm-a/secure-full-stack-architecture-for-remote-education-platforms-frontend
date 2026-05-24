import BackButton from "@/components/button/backButton";
import CourseDetail from "@/components/courseDetail";
import { ParamsType, SearchParamsType } from "@/lib/type";

export default async function Pricing({ params, searchParams }: ParamsType & SearchParamsType){
    const { slug } = await params;
    const { q } = await searchParams;

    return (
        <div>
            <BackButton title={`${q}`} />
            <CourseDetail id={parseInt(slug)} />
        </div>
    )
}