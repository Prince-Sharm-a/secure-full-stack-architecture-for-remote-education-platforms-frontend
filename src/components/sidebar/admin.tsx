"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ui/darkModeToggle";

export default function AdminSidebar(   ) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Users", path: "/admin/users" },
    { name: "Classes", path: "/admin/classes" },
    { name: "Subjects", path: "/admin/subjects" },
    { name: "Assignments", path: "/admin/assignments" },
    { name: "Reports", path: "/admin/reports" },
    { name: "Settings", path: "/admin/settings" },
  ];

  return (
    <div className="lg:flex h-auto hidden min-h-screen">
      
      {/* Sidebar */}
      <aside className="w-64 dark:shadow-gray-700 shadow-md p-5 h-full flex flex-col">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path);

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`block px-3 py-2 rounded transition ${
                    isActive
                      ? "bg-red-500 text-white border-l-4 border-red-700"
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