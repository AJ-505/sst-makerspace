"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function MobileNavbar({ children }: { children: React.ReactNode }) {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <div className="fixed top-3 right-4 z-50 sm:top-5 sm:right-5 md:hidden">
      <button
        type="button"
        aria-label={
          isMobileNavbarOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={() => setIsMobileNavbarOpen((prev) => !prev)}
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white/95 text-slate-900 shadow-lg shadow-black/20 backdrop-blur transition focus-visible:ring-2 focus-visible:ring-[#7C3AED]/50 focus-visible:outline-none",
          isMobileNavbarOpen && "text-[#6D28D9]",
        )}
      >
        {isMobileNavbarOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div
        className={cn(
          "pointer-events-none absolute right-0 mt-3 w-44 origin-top-right rounded-2xl border border-black/10 bg-white/95 p-2 shadow-2xl shadow-black/20 backdrop-blur transition-all duration-200",
          isMobileNavbarOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "-translate-y-2 scale-95 opacity-0",
        )}
      >
        <nav className="font-poppins flex flex-col gap-1 text-sm font-semibold text-slate-800 [&_a]:rounded-xl [&_a]:px-3 [&_a]:py-2.5 [&_a]:transition [&_a:focus-visible]:ring-2 [&_a:focus-visible]:ring-[#7C3AED]/40 [&_a:focus-visible]:outline-none [&_a:hover]:bg-[#7C3AED]/10 [&_a:hover]:text-[#5B21B6]">
          {children}
        </nav>
      </div>
    </div>
  );
}
