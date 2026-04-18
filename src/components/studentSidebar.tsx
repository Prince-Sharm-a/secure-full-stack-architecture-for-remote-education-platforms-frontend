"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <aside className="w-64 dark:shadow-gray-700 shadow-md p-5">
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
    </aside>
  );
}