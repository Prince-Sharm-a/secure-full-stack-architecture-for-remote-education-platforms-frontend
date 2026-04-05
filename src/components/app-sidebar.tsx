import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "./ui/darkModeToggle";
import LoginModal from "./LoginModal";

type SidebarItem = {
    title: string;
    url: string;
    icon: React.ElementType;
}

// Menu items.
const items: SidebarItem[] = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Edducator</SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
            {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
            <SidebarGroupLabel className="justify-center mb-4">
              <LoginModal />
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {
                        items.map(({title,url,icon: Icon}: SidebarItem)=>(
                            <SidebarMenuItem key={title}>
                                <SidebarMenuButton asChild >
                                    <Link href={url}>
                                        <Icon />
                                        <span>{title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))
                    }
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <ModeToggle />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}