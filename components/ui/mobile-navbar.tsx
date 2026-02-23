"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function MobileNavbar({ children }: { children: React.ReactNode }) {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  return (
    <div className="fixed right-0 z-50 flex flex-col items-center gap-1 md:hidden">
      <div onClick={() => setIsMobileNavbarOpen((prev) => !prev)}>
        {isMobileNavbarOpen ? <X /> : <Menu />}
      </div>

      <div
        className={cn(
          "z-50 flex flex-col gap-1.5 pr-1 transition-transform",
          !isMobileNavbarOpen && "translate-x-[130%]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
