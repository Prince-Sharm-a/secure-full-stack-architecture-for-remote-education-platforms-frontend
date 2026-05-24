import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "sonner";

export default function UnAuthorized(){
    return (
        <SidebarProvider>
          <AppSidebar />
          <div className=" w-full">
            <nav className="w-full flex flex-row sticky top-0">
              <Navbar />
            </nav>
            <main className="py-2 px-2 w-full min-h-screen h-auto ">
                <div className="w-full md:min-h-117 min-h-126 flex justify-center items-center">
                    <span className="text-[10vw] font-extrabold text-mist-200/80 dark:text-zinc-900">UnAuthorized 401</span>
                </div>
            </main>
            <footer className="w-full">
              <Footer />
            </footer>
          </div>
        </SidebarProvider>
    )
}