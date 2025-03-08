"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navItems } from "@/app/constants/dashboard";
import { MenuIcon } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "bg-blue-800 text-white transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-60",
      )}
    >
      <div className="p-4 border-b border-blue-700 flex items-center justify-center">
        {!collapsed && (
          <div className="flex items-center">
            <svg
              className="h-8 w-8 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <div className="text-sm">
              <div className="font-bold">Universitas</div>
              <div>Siber Asia</div>
            </div>
          </div>
        )}
        {collapsed && (
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        )}
      </div>

      <div className="p-2 text-xs uppercase font-semibold text-blue-300">
        {!collapsed && "Menu"}
      </div>

      <div className="flex-1 overflow-auto">
        <nav className="p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 mb-1 transition-colors",
                  isActive
                    ? "bg-blue-700 text-white"
                    : "text-blue-200 hover:bg-blue-700 hover:text-white",
                )}
              >
                <Icon className="h-5 w-5 mr-3" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="m-2 self-end text-blue-300 hover:text-white hover:bg-blue-700"
        onClick={() => setCollapsed(!collapsed)}
      >
        <MenuIcon className="h-5 w-5" />
      </Button>
    </div>
  );
}
