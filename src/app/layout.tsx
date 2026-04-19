import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/footer";
import { AuthProvider } from "@/context";
import { Toaster } from "sonner";

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

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  // const headerStore = await headers();
  // const isAuth = headerStore.get("x-auth");
  // const isRole = headerStore.get("x-role");
  // console.log(isRole,isAuth)

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
        <AuthProvider>
        <SidebarProvider>
          <AppSidebar />
          <div className=" w-full">
            <nav className="w-full flex flex-row sticky top-0">
              <Navbar />
            </nav>
            <main className="px-2 w-full md:min-h-117 min-h-126">
              {children}
            </main>
            <Toaster />
            <footer className="w-full">
              <Footer />
            </footer>
          </div>
        </SidebarProvider>
        </AuthProvider>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
