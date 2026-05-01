import Editor from "@/components/Editor";
import { getAPI } from "@/lib/apiCall";
import { ParamsType } from "@/lib/type";

const fetchData = async (id: number) => {
    const data = await getAPI(`/teacher/courses/${id}`);
    return data.data;
}

export default async function CourseEdit({ params }: ParamsType) {
    const { slug } = await params;
    const data = await fetchData(Number.parseInt(slug));

    return (
        <div>
            <Editor />
        </div>
    )
}