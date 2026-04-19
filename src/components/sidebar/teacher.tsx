"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TeacherSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/teacher/dashboard" },
    { name: "My Courses", path: "/teacher/courses" },
    { name: "Assignments", path: "/teacher/assignments" },
    { name: "Attendance", path: "/teacher/attendance" },
    { name: "Student", path: "/teacher/students" },
    { name: "Grades", path: "/teacher/grades" },
  ];

  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <aside className="w-64 dark:shadow-gray-700 shadow-md p-5">
        <h2 className="text-xl font-bold mb-6">Teacher Panel</h2>

        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path);

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`block px-3 py-2 rounded transition ${
                    isActive
                      ? "bg-green-500 text-white border-l-4 border-green-700"
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
    </div>
  );
}