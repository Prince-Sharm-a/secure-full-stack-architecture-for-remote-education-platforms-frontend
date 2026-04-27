import React from "react";
import Link from "next/link";
import { TeacherSidebar } from "@/components/sidebar";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex h-screen">
      
      <TeacherSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto h-full">
        {children}
      </main>
    </div>
  );
}