import { StudentSidebar } from "@/components/sidebar";
import Link from "next/link"

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen ">

      <StudentSidebar />

      {/* Main */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}