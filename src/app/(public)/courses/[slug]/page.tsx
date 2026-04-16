import { ParamsType } from "@/lib/type";

export default async function Pricing({ params } : ParamsType){
    const { slug } = await params;
    // console.log(slug);
    return (
        <div>
            Public Pricing { slug }
        </div>
    )
}