// app/science/layout.tsx
import type { ReactNode } from "react";
import dynamic from "next/dynamic";

// Load tabs only on the client to avoid SSR issues with usePathname
const NavTabs = dynamic(() => import("./nav-tabs"), { ssr: false });

export const metadata = {
  title: "Science — Débora Joppi",
  description: "Research, publications, and teaching by Débora Joppi",
};

export default function ScienceLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top bar with tabs */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <div className="flex items-center justify-between">
            <a href="#about" className="font-semibold tracking-tight">
              Débora Joppi
            </a>
          </div>
          {/* Tabs mount client-side */}
          <NavTabs />
        </div>
      </header>

      {/* Page body */}
      <div className="mx-auto max-w-5xl px-4 py-10">{children}</div>

      <footer className="mx-auto max-w-5xl px-4 py-10 text-xs text-neutral-500 text-center">
        © {new Date().getFullYear()} Débora Joppi. Built with Next.js · static export.
      </footer>
    </main>
  );
}
