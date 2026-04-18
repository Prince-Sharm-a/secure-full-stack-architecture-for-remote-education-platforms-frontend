"use client"
import { Button } from "./ui/button";
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getAPI } from "@/lib/apiCall";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context";

export function DropdownMenuAvatar() {
  const router = useRouter();
  const { setIsLogin } = useAuth();
  const handleLogout = async () => {
    try {
      const res = await getAPI('/auth/logout');
      if(res?.success){
        localStorage.removeItem('token');
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
        <Button className="w-8 h-8 md:w-9 md:h-9 p-0 rounded-full" variant={"outline"}>
            <img src={`/api/avatar?name=prince`} className="rounded-full" alt="profile avatar" />
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