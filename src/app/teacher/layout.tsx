import React from "react";
import Link from "next/link";
import { TeacherSidebar } from "@/components/sidebar";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex h-auto">
      
      <TeacherSidebar />

      {/* Main Content */}
      <main className="flex-1 md:p-6 h-full ">
        {children}
      </main>
    </div>
  );
}