import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/footer";
import { cookies, headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edducator",
  description: "Education Platform. Learn, Whatever You Want To. Neet, Jee, Skills Development",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isAuth = cookieStore.get("x-auth")?.value;
  const isRole = cookieStore.get("x-role")?.value;
  const log = cookieStore.get("x-log")?.value;
  console.log(isAuth,isRole, log);
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
        attribute={"class"}
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <div className="">
        <SidebarProvider>
          <AppSidebar />
          <div className=" w-full">
            <nav className="w-full flex flex-row sticky top-0">
              <Navbar isAuth={isAuth} />
            </nav>
            <main className="px-2 w-full md:min-h-117 min-h-126">
              { isRole === "unauthorized" ? 
                <div className="w-full md:min-h-117 min-h-126 flex justify-center items-center">
                    <span className="text-[10vw] font-extrabold text-mist-200/80 dark:text-zinc-900">UnAuthorized 401</span>
                </div>
                : children
              }
            </main>
            <footer className="w-full">
              <Footer />
            </footer>
          </div>
        </SidebarProvider>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
