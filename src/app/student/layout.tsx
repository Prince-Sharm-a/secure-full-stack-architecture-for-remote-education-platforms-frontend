import Footer from "@/components/footer";
import { StudentSidebar } from "@/components/sidebar";
import Link from "next/link"

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="flex h-screen ">

        <StudentSidebar />

        {/* Main */}
        <main className="flex-1 md:p-6 min-h-screen overflow-y-auto">
          {children}
        </main>
      </div>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}