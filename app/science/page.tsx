"use client";

import Link from "next/link";
import { useMemo } from "react";

// ✅ For GitHub Pages subpath
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** ---------- Editable data (fill these) ---------- */
const links = {
  email: "mailto:deborajoppi@gmail.com",
  linkedin: "https://www.linkedin.com/in/deborajoppi/",
  github: "https://github.com/dehjoppi",
  scholar: "https://scholar.google.com/",
  orcid: "https://orcid.org/",
  cv: `${base}/Debora_Joppi_CV.pdf`, // put your PDF in /public
};

const researchInterests = [
  "Cancer epigenetics (PRC1.1: USP7, PCGF1, BCOR, KDM2B)",
  "Functional & spatial genomics (CUT&Tag, ChIP-seq, RNA-seq)",
  "Structure-guided hypotheses (AlphaFold, PyMOL)",
  "DLBCL mechanistic models & biomarkers",
];

type Pub = {
  year: number;
  title: string;
  venue?: string;
  authors?: string;
  href?: string;
  note?: string; // e.g., “manuscript in prep”
};

// ⬇️ Add your publications here
const publications: Pub[] = [
  {
    year: 2024,
    title: "Deciphering the oncogenic role of PRC1 complexes in DLBCL (PhD Thesis)",
    venue: "University of Göttingen",
    href: "#", // link to thesis PDF if public
  },
  {
    year: 2025,
    title: "USP7 mutations rewire PRC1.1 activity in GCB-DLBCL",
    note: "manuscript in preparation",
    href: "#",
  },
  {
    year: 2025,
    title: "GFI1 overexpression modulates CD79b networks in HBL1",
    note: "proteomics + validation — in prep",
  },
];

const teaching = [
  {
    when: "2024—2025",
    title: "Guest lectures: Epigenetics & Functional Genomics",
    where: "Charité (Berlin), Hematology & Oncology",
    details:
      "CUT&Tag/ChIP-seq study design, QC, and downstream interpretation; Polycomb complexes and H2AK119ub.",
  },
];

export default function Science() {
  // Group pubs by year, newest first
  const pubsByYear = useMemo(() => {
    const map = new Map<number, Pub[]>();
    publications.forEach((p) => {
      const arr = map.get(p.year) ?? [];
      arr.push(p);
      map.set(p.year, arr);
    });
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, []);

  const nav = [
    { href: "#about", label: "About" },
    { href: "#research", label: "Research" },
    { href: "#publications", label: "Publications" },
    { href: "#teaching", label: "Teaching" },
    { href: links.cv, label: "CV" },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <a href="#about" className="font-semibold tracking-tight">Débora Joppi</a>
          <nav className="hidden md:flex gap-5 text-sm">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="hover:underline underline-offset-4">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <IconLink href={links.email} label="Email"><MailIcon/></IconLink>
            <IconLink href={links.linkedin} label="LinkedIn"><LinkedInIcon/></IconLink>
            <IconLink href={links.github} label="GitHub"><GitHubIcon/></IconLink>
            <IconLink href={links.scholar} label="Google Scholar"><ScholarIcon/></IconLink>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* portrait */}
          <div className="shrink-0">
            <div className="size-32 md:size-40 rounded-full overflow-hidden ring-1 ring-neutral-200 bg-neutral-100">
              {/* put debora-portrait.jpg in /public */}
              <img
                src={`${base}/debora-portrait.jpg`}
                alt="Débora Joppi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* intro */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold tracking-tight">About me</h1>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Postdoctoral researcher at Charité (Berlin). I study how mutations in{" "}
              <em>PRC1.1</em> (USP7, PCGF1, BCOR, KDM2B) reshape chromatin and drive DLBCL.
              I integrate functional assays with spatial genomics and structure-guided models
              (AlphaFold, PyMOL) to generate mechanistic & biomarker hypotheses.
            </p>

            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-neutral-700">
              {researchInterests.map((ri) => (
                <li key={ri} className="flex items-start gap-2">
                  <span className="mt-[6px] size-1.5 rounded-full bg-neutral-400" />
                  <span>{ri}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <Button href={links.cv}>Download CV</Button>
              <Button href="#contact" variant="secondary">Contact</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research (quick highlights / current projects) */}
      <section id="research" className="mx-auto max-w-5xl px-4 py-10 border-t border-neutral-200">
        <h2 className="text-xl font-semibold tracking-tight">Research</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card title="USP7 mutational landscape in GCB-DLBCL"
                summary="Site-directed mutagenesis (Y243D, I660K, T730S, Y1056H), CRISPR perturbations,
                         and structural modeling to understand PRC1.1 assembly & deubiquitinase activity."
                href="#publications" />
          <Card title="PCGF1 overexpression & H2AK119ub dynamics"
                summary="Functional genomics and CUT&Tag profiling to quantify Polycomb deposition and downstream effects."
                href="#publications" />
          <Card title="GFI1-OE and BCR signaling (CD79b)"
                summary="Global proteomics in HBL1; TF networks (LCK/LAT2) and potential BCAR1 cytosolic interactions."
                href="#publications" />
          <Card title="Public re-analysis: BCOR/KDM2B peaks in LY1"
                summary="ChIP-seq overlap & motif discovery (HOMER), excluding H3K27me3 to enrich PRC1.1 candidates."
                href="#publications" />
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="mx-auto max-w-5xl px-4 py-10 border-t border-neutral-200">
        <h2 className="text-xl font-semibold tracking-tight">Publications & manuscripts</h2>
        <div className="mt-6 space-y-8">
          {pubsByYear.map(([year, items]) => (
            <div key={year}>
              <div className="text-sm font-medium text-neutral-500">{year}</div>
              <ol className="mt-3 space-y-3">
                {items.map((p, i) => (
                  <li key={i} className="text-sm leading-relaxed">
                    <span className="font-medium">{p.title}</span>
                    {p.venue ? <> — <em>{p.venue}</em></> : null}
                    {p.note ? <> — <span className="text-neutral-500">{p.note}</span></> : null}
                    {p.href ? (
                      <>
                        {" "}<a className="underline underline-offset-4" href={p.href} target="_blank">link</a>
                      </>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching */}
      <section id="teaching" className="mx-auto max-w-5xl px-4 py-10 border-t border-neutral-200">
        <h2 className="text-xl font-semibold tracking-tight">Teaching</h2>
        <ul className="mt-6 space-y-4">
          {teaching.map((t, idx) => (
            <li key={idx} className="text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="font-medium">{t.title}</div>
                <div className="text-neutral-500">{t.when}</div>
              </div>
              <div className="text-neutral-700">{t.where}</div>
              <div className="text-neutral-700">{t.details}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-12 border-t border-neutral-200">
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-neutral-700 text-sm">
          Email me for collaborations, postdoc opportunities, or to request my full CV.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href={links.email}>deborajoppi@gmail.com</Button>
          <Button href={links.linkedin} variant="secondary">LinkedIn</Button>
          <Button href={links.github} variant="secondary">GitHub</Button>
          <Button href={links.scholar} variant="secondary">Google Scholar</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-4 py-10 text-xs text-neutral-500">
        © {new Date().getFullYear()} Débora Joppi. Built with Next.js · Tailwind · static export.
      </footer>
    </main>
  );
}

/** ---------- tiny UI primitives ---------- */
function Button({
  href, children, variant = "primary",
}: { href: string; children: React.ReactNode; variant?: "primary" | "secondary"; }) {
  const base = "inline-flex items-center px-4 py-2 text-sm font-medium border transition rounded-full";
  const style =
    variant === "secondary"
      ? " bg-white text-neutral-900 border-neutral-300 hover:bg-neutral-100"
      : " bg-neutral-900 text-white border-neutral-900 hover:opacity-90";
  return <a href={href} className={`${base} ${style}`}>{children}</a>;
}

function Card({ title, summary, href }: { title: string; summary: string; href?: string }) {
  return (
    <div className="shadow-sm border border-neutral-200 rounded-2xl p-5 bg-white hover:shadow-md transition-shadow">
      {href ? (
        <a className="block hover:underline underline-offset-4" href={href}>
          <h3 className="font-medium leading-snug">{title}</h3>
        </a>
      ) : (
        <h3 className="font-medium leading-snug">{title}</h3>
      )}
      <p className="mt-2 text-sm text-neutral-800">{summary}</p>
    </div>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} className="p-2 rounded-full hover:bg-neutral-200">{children}</a>
  );
}

/** ---------- svg icons ---------- */
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4h16v16H4z" /><path d="M22 6l-10 7L2 6" />
    </svg>
  );
}
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h4v1.8h.06c.56-1.06 1.92-2.18 3.94-2.18 4.22 0 5 2.78 5 6.4V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z" />
    </svg>
  );
}
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.48-1.34-5.48-5.96 0-1.32.47-2.39 1.24-3.24-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.7.24 2.96.12 3.27.77.85 1.24 1.92 1.24 3.24 0 4.63-2.81 5.64-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0012 .5z" />
    </svg>
  );
}
function ScholarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2L1 7l11 5 9-4.09V17" /><path d="M11 12v10l-6-3" /><path d="M17 17l-6 3" />
    </svg>
  );
}
