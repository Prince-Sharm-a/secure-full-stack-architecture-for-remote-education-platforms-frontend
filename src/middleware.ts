import { NextResponse, NextRequest } from "next/server";

const routeAccess = [
    {path: "/admin", roles: ["admin"]},
    {path: "/teacher", roles: ["teacher","admin"]},
    {path: "/student", roles: ["admin","teacher","student"]},
];

export async function middleware(req: NextRequest){
    const { pathname } = await req.nextUrl;

    const response = NextResponse.next();
    const matchedRoute = routeAccess.find(route => pathname.startsWith(route.path));
    response.cookies.set("x-log",pathname || "no data",{path: "/"});

    let data;
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/profile`,{
            headers: {
                cookie: req.headers.get("cookie") || "",
            }
        });
        if(!res?.ok){
            response.cookies.set("x-auth","false");
            // return response;
        } else {
            response.cookies.set("x-auth","true"); 
        }
        data = await res.json();
        
    } catch(error) {
        response.cookies.set("x-error", "true");
        response.cookies.set("x-message", "something went wrong");
    } finally {

        if(!matchedRoute){
            response.cookies.set("x-role","authorized");
            return response;
        }
        
        if(!matchedRoute.roles.includes(data?.data?.role)){
            response.cookies.set("x-role","unauthorized");
        } else {
            response.cookies.set("x-role","authorized");
        }
    
        return response;
    }
}

export const config = {
  matcher: ["/:path*"],
};