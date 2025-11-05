// app/science/nav-tabs.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/science", label: "About" },
  { href: "/science/research", label: "Research" },
  { href: "/science/publications", label: "Publications" },
  { href: "/science/teaching", label: "Teaching" },
  { href: "/Debora_Joppi_CV.pdf", label: "CV", external: true },
];

export default function NavTabs() {
  const pathname = usePathname() || "";

  return (
    <nav className="mt-3 flex flex-wrap gap-3 text-sm">
      {tabs.map((t) =>
        t.external ? (
          <Link
            key={t.label}
            href={t.href}
            target="_blank"
            className="rounded-full border px-3 py-1.5 hover:bg-neutral-100 border-neutral-300"
          >
            {t.label}
          </Link>
        ) : (
          <Link
            key={t.label}
            href={t.href}
            className={[
              "rounded-full border px-3 py-1.5",
              pathname === t.href || pathname.startsWith(t.href + "/")
                ? "bg-neutral-900 text-white border-neutral-900"
                : "hover:bg-neutral-100 border-neutral-300",
            ].join(" ")}
          >
            {t.label}
          </Link>
        )
      )}
    </nav>
  );
}
