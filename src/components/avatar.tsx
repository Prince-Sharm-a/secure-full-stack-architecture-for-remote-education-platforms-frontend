"use client"
import { Button } from "./ui/button";
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  User,
  UserIcon,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getAPIClient } from "@/lib/apiCall";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context";
import { useEffect, useState } from "react";

type UserProfileType = { name ?: string }

export function DropdownMenuAvatar() {
  const [user,  setUser ] = useState<UserProfileType>();
  const router = useRouter();
  const { setIsLogin } = useAuth();

  useEffect(()=>{
    (async ()=>{
      const res = await getAPIClient("/user/profile");
      if(res?.success){
        setUser(res?.data);
      }
    })()
  },[]);

  const handleLogout = async () => {
    try {
      const res = await getAPIClient('/auth/logout');
      if(res?.data?.role){
        localStorage.removeItem('token');
        setUser(undefined);
        setIsLogin(false);
        router.refresh();
      }
    } catch (error){
      console.error(error);
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-8 h-8 md:w-9 md:h-9 p-0 rounded-full shadow-md" variant={"ghost"}>
            { user?.name ?
              <img src={`/api/avatar?name=${user?.name}`} className="rounded-full" alt="profile avatar" />
              : <User />
            }
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={handleLogout}>
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export default function Avatar(){
    return(
        <>
        <DropdownMenuAvatar />
        </>
    )
}