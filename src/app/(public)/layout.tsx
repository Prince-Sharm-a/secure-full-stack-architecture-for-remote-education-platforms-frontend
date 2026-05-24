import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";


export default function DefaultRouteLayout({ children }: Readonly<{children: React.ReactNode;}>){
    return (
        <SidebarProvider>
          <AppSidebar />
          <div className=" w-full">
            <nav className="w-full flex flex-row sticky top-0">
              <Navbar />
            </nav>
            <main className="py-2 px-2 w-full min-h-screen h-auto ">
              {children}
            </main>
            <footer className="w-full">
              <Footer />
            </footer>
          </div>
        </SidebarProvider>
    )
}