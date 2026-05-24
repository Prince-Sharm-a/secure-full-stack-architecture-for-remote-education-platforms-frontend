"use client";

import Footer from "@/components/footer";
import { AdminSidebar } from "@/components/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="w-full">
      <div className="flex h-auto gap-3">

          <AdminSidebar />
          
        {/* Main Content */}
        <main className="px-2 py-2 min-h-screen w-full">
          {children}
        </main>
      </div>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}