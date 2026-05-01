const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1'

function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token") || "";
  }
  return "";
}

function getCookieHeader(){
    if (typeof window === "undefined") {
        try {
            const { cookies } = require("next/headers");
            return cookies().toString();
        } catch {
            return "";
        }
    }
    return "";
}

async function handleResponse(res: Response) {
    try{
        if(!res.ok){
            const error = await res.json().catch(() => {});
            throw {
                status: res.status,
                message: error.message || "Something went wrong",
            };
        }

        return res.json();
    } catch (err: any){
      console.log(err?.message);
      if(err?.message === 'Unauthenticated'){
        if (typeof window !== "undefined") {
            localStorage.removeItem("token");
            document.cookie = "token=; path=/;";
        }
      }
    }
}

export async function getAPIClient(api: string, params ?: Record<string,any>) {
    const query = params ? `?${new URLSearchParams(params).toString()}` : "";
    
    const res = await fetch(`${BASE_URL}${api}${query}`, {
        credentials: "include",
        headers: {
            "Authorization": `Bearer ${getToken()}`,
        }
    });

    return res.json();
}

export async function getAPI(api : string,params ?: Record<string,any>){
    const query = params ? `?${new URLSearchParams(params).toString()}` : "";

    const data = await fetch(BASE_URL+api+query,{
        method:"GET",
        headers: {
            "Authorization": `Bearer ${getToken()}`,
            cookie: getCookieHeader()            
        },        
        cache: "no-store",
    });
    return handleResponse(data);
}

export async function postAPI(api : string, payload : object){
    const data = await fetch(BASE_URL+api,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
            cookie: getCookieHeader(),
        },
        body: JSON.stringify(payload),
    });
    return handleResponse(data);
}

export async function putAPI(api : string, payload : object){
    const data = await fetch(BASE_URL+api,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
            cookie: getCookieHeader(),
        },
        body: JSON.stringify(payload),
    });
    return handleResponse(data);
}

export async function deleteAPI(api : string, payload ?: object){
    const data = await fetch(BASE_URL+api,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
            cookie: getCookieHeader(),
        },
        body: payload ? JSON.stringify(payload) : undefined,
    });
    return handleResponse(data);
}