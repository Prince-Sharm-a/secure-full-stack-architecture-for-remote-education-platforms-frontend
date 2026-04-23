import { NextResponse, NextRequest } from "next/server";

const routeAccess = [
    {path: "/admin", roles: ["admin"]},
    {path: "/teacher", roles: ["teacher","admin"]},
    {path: "/student", roles: ["admin","teacher","student"]},
];

export async function middleware(req: NextRequest){
    const { pathname } = req.nextUrl;
    // console.log('middleware running '+pathname);

    // const requestHeaders = new Headers(req.headers)
    // requestHeaders.set("x-log",pathname);
    // requestHeaders.set("x-auth","false");
    // requestHeaders.set("x-role","authorized");
    
    const matchedRoute = routeAccess.find(route => pathname.startsWith(route.path));

    let data;
    const token = req.cookies.get('token')?.value;
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/profile`,{
            headers: {
                "Authorization": `Bearer ${token}`,
                // cookie: req.headers.get("cookie") || ""
            }
        });
        if(res?.ok){
            data = await res.json();
            // requestHeaders.set("x-auth","true");
            // return response;
        }
        
    } catch(error) {
        // requestHeaders.set("x-auth","false");
        if(error instanceof Error){
            console.log(error?.message);
        }
    } finally {

        if(matchedRoute){
            const role = data?.data?.role;
            console.log(role);
            const authorized = role && matchedRoute.roles.includes(role);
            if(!authorized){
                // return NextResponse.redirect(new URL('/unauthorized', req.url));
            }
            // requestHeaders.set("x-role",authorized ? "authorized" : "unauthorized");
        }

        // return NextResponse.next({ request: { headers: requestHeaders } });
        return NextResponse.next();
    }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};