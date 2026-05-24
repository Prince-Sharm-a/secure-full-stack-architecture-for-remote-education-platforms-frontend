"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ui/darkModeToggle";

export default function StudentSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/student/dashboard" },
    { name: "Courses", path: "/student/courses" },
    { name: "Assignments", path: "/student/assignments" },
    { name: "Attendance", path: "/student/attendance" },
    { name: "Results", path: "/student/results" },
  ];

  return (
    <div className="lg:flex h-auto hidden min-h-screen">
    <aside className="w-64 dark:shadow-gray-700 shadow-md p-5 h-full flex flex-col">
      <h2 className="text-xl font-bold mb-6">Student Panel</h2>

      <ul className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block px-3 py-2 rounded transition ${
                isActive
                    ? "bg-blue-500 text-white border-l-4 border-blue-700"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex mt-auto sticky bottom-3">
        <ModeToggle />
      </div>
    </aside>
    </div>
  );
}