"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/", icon: "🏠" },
    { name: "Colleges", href: "/colleges", icon: "🎓" },
    { name: "Scholarships", href: "/scholarships", icon: "💰" },
    { name: "Mock Test", href: "/profile", icon: "👤" },
    { name: "Courses & Degree", href: "/courses/", icon: "📚" },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">SIH2025</h1>
        <p className="text-gray-600 text-sm">Career & Education Advisor</p>
      </div>
      
      <nav className="mt-6">
        <div className="px-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              } group flex items-center px-3 py-2 text-sm font-medium rounded-l-md transition-colors duration-200`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
