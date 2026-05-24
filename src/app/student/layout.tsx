import Footer from "@/components/footer";
import { StudentSidebar } from "@/components/sidebar";
import Link from "next/link"

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="flex h-screen ">

        <StudentSidebar />

        {/* Main */}
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