// app/science/nav-tabs.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const tabs = [
  { href: `${base}/science`, label: "About" },
  { href: `${base}/science/research`, label: "Research" },
  { href: `${base}/science/publications`, label: "Publications" },
  { href: `${base}/science/teaching`, label: "Teaching" },
  { href: `${base}/Debora_Joppi_CV.pdf`, label: "CV", external: true },
];

export default function NavTabs() {
  // On GitHub Pages, usePathname() returns the pathname WITHOUT the basePath.
  // So we compare against href with base stripped.
  const pathname = usePathname() || "";
  const stripBase = (url: string) => (base && url.startsWith(base) ? url.slice(base.length) : url);

  return (
    <nav className="mt-3 flex flex-wrap gap-3 text-sm">
      {tabs.map((t) => {
        if (t.external) {
          return (
            <a
              key={t.label}
              href={t.href}
              target="_blank"
              className="rounded-full border px-3 py-1.5 hover:bg-neutral-100 border-neutral-300"
              rel="noopener noreferrer"
            >
              {t.label}
            </a>
          );
        }

        const localHref = stripBase(t.href);
        const isActive =
          pathname === localHref ||
          (localHref === "/science" && pathname === "/science") ||
          (pathname.startsWith(localHref) && localHref !== "/science");

        return (
          <Link
            key={t.label}
            href={t.href}
            className={[
              "rounded-full border px-3 py-1.5",
              isActive
                ? "bg-neutral-900 text-white border-neutral-900"
                : "hover:bg-neutral-100 border-neutral-300",
            ].join(" ")}
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
