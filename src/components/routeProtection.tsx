import { getAPI } from "@/lib/apiCall";
import { ChildrenType } from "@/lib/type";
import { get } from "http";
import { usePathname } from "next/navigation";

const routeAccess = [
    {path: "/admin", roles: ["admin"]},
    {path: "/teacher", roles: ["teacher","admin"]},
    {path: "/student", roles: ["admin","teacher","student"]},
];

type ProtectRouteProps = ChildrenType & {
    allowedRole?: string;
};

export default async function ProtectRoute({ children, allowedRole }: ProtectRouteProps){
    const pathname = usePathname();
    console.log(pathname);

    const matchedRoute = routeAccess.find(route => pathname.startsWith(route.path));
    const authorized = allowedRole?.includes('')
    const res = await getAPI(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/profile`);
    // const isRole === res?.data?.role; ? "none" : "";
    const isRole = "unauthorized";
    return (
        <>
        {
            isRole === "unauthorized" ? 
            <div className="w-full md:min-h-117 min-h-126 flex justify-center items-center">
                <span className="text-[10vw] font-extrabold text-mist-200/80 dark:text-zinc-900">UnAuthorized 401</span>
            </div>
            : children
        }
        </>
    )
}