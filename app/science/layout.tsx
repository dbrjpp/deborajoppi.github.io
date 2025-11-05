// app/science/layout.tsx
import type { ReactNode } from "react";
import { Suspense } from "react";
import NavTabs from "./nav-tabs"; // <-- client component ("use client" at top of that file)

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
            {/* You can also link this back to the landing: href="/" */}
            <a href="#about" className="font-semibold tracking-tight">
              Débora Joppi
            </a>
          </div>

          {/* Render the client-only tabs inside Suspense to avoid hydration timing hiccups */}
          <Suspense fallback={null}>
            <NavTabs />
          </Suspense>
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
