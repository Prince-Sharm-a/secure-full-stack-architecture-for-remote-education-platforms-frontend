import BackButton from "@/components/button/backButton";
import { ParamsType } from "@/lib/type";

export default async function CreateAssignmentPage({ params }:ParamsType){
    const { slug } = await params;
    return (
        <div>
            <BackButton />
        </div>
    )
}