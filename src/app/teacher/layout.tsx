import React from "react";
import { TeacherSidebar } from "@/components/sidebar";
import Footer from "@/components/footer";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="w-full ">
      <div className="flex h-auto gap-3">
        
        <TeacherSidebar />

        {/* Main Content */}
        <main className="px-2 pb-2 min-h-screen w-full">
          {children}
        </main>
      </div>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}