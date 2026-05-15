import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthProvider } from "@/context";

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

export default async function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
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
        <div className="pt-2 w-full min-h-screen h-auto">
        <AuthProvider>
        {children}
        </AuthProvider>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
