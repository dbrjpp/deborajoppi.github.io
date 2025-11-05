"use client";

// 🔧 Canvas-friendly version (no Next.js, no Framer Motion)
// This renders *here* in the ChatGPT canvas. It uses plain React + CSS transitions.
// For your real site, use the Next.js + Framer Motion version shown at the end of this file.

import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key?.toLowerCase();
      if (key === "s") window.location.href = "/science";
      if (key === "a") window.location.href = "/art";
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div style={styles.page}>
      {/* subtle vignette */}
      <div style={styles.vignette} />

      <main style={styles.main}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: 40 }}>
          
          <h1 style={styles.title}>
            Hi, I am Débora! 
            </h1>
            <p style={{ ...styles.kicker, fontSize: 14, marginTop: 12 }}>what would you like to see?</p>
        </header>

        {/* Cards */}
        <div style={styles.grid}>
          <SelectorCard
            href="/science"
            label="science"
            kicker=""
            emoji=""
            bg="#cfe7de"
            ring="#7aa69a"
          />

          <SelectorCard
            href="/art"
            label="art"
            kicker=""
            emoji=""
            bg="#f9d5cc"
            ring="#d7a39a"
          />
        </div>

        <p style={styles.footerNote}>
          Tip: press <kbd style={styles.kbd}>S</kbd> or <kbd style={styles.kbd}>A</kbd> to jump.
        </p>
      </main>
    </div>
  );
}

function SelectorCard({ href, label, kicker, emoji, bg, ring }: {
  href: string;
  label: string;
  kicker: string;
  emoji: string;
  bg: string;
  ring: string;
}) {
  return (
    <a href={href} aria-label={`Go to ${label}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          ...styles.card,
          backgroundColor: bg,
          boxShadow: "6px 6px 0 0 rgba(0,0,0,0.9)",
          border: "1px solid rgba(0,0,0,0.7)",
          position: "relative",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(0)")}
      >
        {/* inner ring */}
        <div
          style={{
            position: "absolute",
            inset: 8,
            borderRadius: 20,
            boxSizing: "border-box",
            border: `2px solid ${ring}`,
            opacity: 0.9,
          }}
        />

        {/* content */}
        <div style={styles.cardContent}>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: 0.2 }}>{label}</div>

          {/* hover badge */}
          <div className="hoverBadge" style={styles.badgeWrapper}>
            <span style={styles.badge}>enter →</span>
          </div>
        </div>
      </div>
      <style>{`
        a div:hover .hoverBadge { opacity: 1; }
      `}</style>
    </a>
  );
}

// Inline styles (keeps this preview self-contained)
const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f6f1e7",
    color: "#111",
    position: "relative",
    overflow: "hidden",
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica, Arial",
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(1200px 600px at 50% -20%, rgba(0,0,0,0.08), transparent)",
    pointerEvents: "none",
  },
  main: {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  kicker: {
    textTransform: "uppercase",
    letterSpacing: "0.3em",
    fontSize: 12,
    color: "#666",
  },
  title: {
    marginTop: 8,
    fontSize: 36,
    fontWeight: 600,
  },
  subtitle: {
    display: "block",
    marginTop: 8,
    fontSize: 16,
    color: "#666",
    fontWeight: 400,
  },
  grid: {
    width: "100%",
    maxWidth: 960,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
  } as React.CSSProperties,
  footerNote: {
    marginTop: 32,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  kbd: {
    padding: "2px 6px",
    border: "1px solid #aaa",
    borderRadius: 4,
  },
  card: {
    borderRadius: 24,
    height: 220,
    transition: "transform 150ms ease",
  },
  cardContent: {
    position: "relative",
    zIndex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  badgeWrapper: {
    position: "absolute",
    bottom: 16,
    right: 16,
    opacity: 0,
    transition: "opacity 150ms ease",
  },
  badge: {
    border: "1px solid rgba(0,0,0,0.5)",
    background: "rgba(255,255,255,0.7)",
    borderRadius: 999,
    fontSize: 12,
    padding: "6px 10px",
  },
};

/* ---------------------------------------------------------
   ✅ Next.js + Framer Motion version for your repo (copy below into app/page.tsx)
   (Leave this as a comment so the canvas can render without Next.js/Framer Motion.)

"use client";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } } };
  return (
    <div className="min-h-screen bg-[#f6f1e7] text-neutral-900 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(0,0,0,0.08),transparent)]" />
      <motion.main variants={container} initial="hidden" animate="show" className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6">
        <motion.header variants={item} className="mb-10 text-center">
          <p className="mt-3 text-base md:text-lg text-neutral-700">What moves you? :)</p>
        </motion.header>
        <motion.div variants={item} className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <SelectorCard href="/science" label="science" kicker="" emoji="" bg="bg-[#cfe7de]" ring="ring-[#7aa69a]" />
          <SelectorCard href="/art" label="art" kicker="" emoji="" bg="bg-[#f9d5cc]" ring="ring-[#d7a39a]" />
        </motion.div>
        <motion.p variants={item} className="mt-10 text-xs md:text-sm text-neutral-600 text-center">Tip: press <kbd className="px-1 py-0.5 border rounded">S</kbd> or <kbd className="px-1 py-0.5 border rounded">A</kbd> to jump.</motion.p>
              
        <motion.footer variants={item} className="mt-10 text-xs md:text-sm text-neutral-600 text-center">
          Débora Joppi 2025
        </motion.footer>
      </motion.main>
      <KeyShortcuts />
    </div>
  );
}

function SelectorCard({ href, label, kicker, emoji, bg, ring }: { href: string; label: string; kicker: string; emoji: string; bg: string; ring: string; }) {
  return (
    <Link href={href} aria-label={`Go to ${label}`}>
      <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} className={["group relative cursor-pointer rounded-3xl border border-neutral-900/70 shadow-[6px_6px_0_0_rgba(0,0,0,0.9)]", bg].join(" ")}>        
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-neutral-900/10" />
        <div className={`pointer-events-none absolute inset-2 rounded-2xl ring-2 ${ring} ring-offset-4 ring-offset-transparent opacity-90`} />
        <div className="relative z-10 flex h-56 md:h-72 flex-col items-center justify-center p-8">
          <div className="text-5xl md:text-6xl mb-3" aria-hidden>{emoji}</div>
          <div className="text-2xl md:text-3xl font-semibold tracking-wide">{label}</div>
          <div className="mt-2 text-center text-xs md:text-sm text-neutral-700 max-w-[24ch]">{kicker}</div>
          <div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100"><span className="rounded-full border border-neutral-900/50 bg-white/70 px-3 py-1 text-xs">enter →</span></div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 rounded-t-3xl bg-white/20 mix-blend-soft-light" />
      </motion.div>
    </Link>
  );
}

function KeyShortcuts() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key?.toLowerCase();
      if (key === "s") window.location.href = "/science";
      if (key === "a") window.location.href = "/art";
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return null;
}

*/
