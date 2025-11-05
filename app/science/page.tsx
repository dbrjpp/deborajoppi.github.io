"use client";

import React from "react";
import Link from "next/link";

// If you want to be explicit with basePath in <img> src when exporting to GitHub Pages:
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""; 
// With your next.config basePath/assetPrefix, this is safe. 
// (Alternative: use next/image unoptimized; this example keeps <img>.)

export default function DeboraSite() {
  const links = {
    email: "mailto:deborajoppi@gmail.com",
    github: "https://github.com/dehjoppi",
    linkedin: "https://www.linkedin.com/in/deborajoppi/",
    scholar: "https://scholar.google.com/", // optional
    cv: "#", // link to PDF when ready
  };

  // Top nav within this page (hash anchors),
  // and a CV link you can update later.
  const nav = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#selected", label: "Selected work" },
    { href: "#talks", label: "Talks" },
    { href: links.cv, label: "CV" },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-50/70 border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <a href="#about" className="font-semibold tracking-tight text-lg">Débora Joppi</a>
          <nav className="hidden md:flex gap-5 text-sm">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="hover:underline underline-offset-4">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <IconLink href={links.email} label="Email"><MailIcon/></IconLink>
            <IconLink href={links.github} label="GitHub"><GitHubIcon/></IconLink>
            <IconLink href={links.linkedin} label="LinkedIn"><LinkedInIcon/></IconLink>
          </div>
        </div>
      </header>

      {/* Hero / Profile */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="size-32 md:size-40 rounded-full overflow-hidden ring-1 ring-neutral-200 bg-neutral-100">
              {/* Put debora-portrait.jpg into /public */}
              <img
                src={`${basePath}/debora-portrait.jpg`}
                alt="Débora Joppi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Intro */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Débora Joppi</h1>
            <p className="mt-1 text-neutral-600">
              Postdoctoral researcher in Hematology &amp; Oncology at Charité (Berlin)
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge icon={<MicroscopeIcon/>}>Epigenetics &amp; Oncology</Badge>
              <Badge icon={<FlaskIcon/>}>CUT&amp;Tag · ChIP-seq · RNA-seq</Badge>
              <Badge icon={<GradCapIcon/>}>PhD</Badge>
              <Badge icon={<CameraIcon/>}>Photography</Badge>
            </div>
            <p className="mt-6 leading-relaxed text-neutral-800">
              I study how mutations in PRC1.1 (<em>USP7</em>, <em>BCOR</em>, <em>KDM2B</em>) reshape chromatin and drive DLBCL.
              I enjoy integrating functional assays with spatial genomics and structure-guided hypotheses (AlphaFold, PyMOL).
              Beyond the bench: running, ceramics, film photography, and a growing crochet archive.
            </p>
            <div className="mt-6 flex gap-3">
              <Button href={links.cv} rounded> <FileIcon className="mr-2"/> Download CV </Button>
              <Button href="#contact" variant="secondary" rounded> <MailIcon className="mr-2"/> Contact </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section id="experience" className="mx-auto max-w-5xl px-4 py-10 border-t border-neutral-200">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <ul className="mt-6 space-y-6">
          <li className="grid md:grid-cols-[180px_1fr] gap-4">
            <div className="text-sm text-neutral-500">2024—present · Berlin</div>
            <Card>
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Postdoctoral Researcher — Charité, Hematology &amp; Oncology</h3>
          
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                PRC1.1 in DLBCL (USP7/PCGF1/BCOR/KDM2B): functional genomics, proteomics, and structure-guided mutagenesis. CUT&amp;Tag (H2AK119ub), RNA-seq, CRISPR, imaging (confocal/STED).
              </p>
            </Card>
          </li>
          <li className="grid md:grid-cols-[180px_1fr] gap-4">
            <div className="text-sm text-neutral-500">2020—2024 · Göttingen/Berlin</div>
            <Card>
              <h3 className="font-medium">PhD in Molecular Medicine — University of Göttingen</h3>
              <p className="mt-2 text-sm text-neutral-700">
                Thesis: “Deciphering the oncogenic role of PRC1 complexes in DLBCL.” magna cum laude.
                Methods: biochemistry, molecular biology, CUT&amp;Tag, public ChIP/ATAC/RNA-seq analyses, AlphaFold &amp; PyMOL.
              </p>
            </Card>
          </li>
          <li className="grid md:grid-cols-[180px_1fr] gap-4">
            <div className="text-sm text-neutral-500">2017—2019 · Stockholm</div>
            <Card>
              <h3 className="font-medium">M.Sc. Biomedicine (Cancer Biology) — Karolinska Institutet</h3>
              <p className="mt-2 text-sm text-neutral-700">Thesis with Maria Genander: Id proteins in hair follicle &amp; epidermis morphogenesis.</p>
            </Card>
          </li>
        </ul>
      </section>

      {/* Selected Work / Papers */}
      <section id="selected" className="mx-auto max-w-5xl px-4 py-10 border-t border-neutral-200">
        <h2 className="text-xl font-semibold tracking-tight">Selected work</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <WorkCard
            title="Thesis — PRC1 in Diffuse Large B-cell Lymphoma"
            venue="University of Göttingen (2024)"
            summary="Integration of functional & spatial genomics to dissect PRC1.1 (USP7, PCGF1, BCOR) and their impact on H2AK119ub and gene regulation."
            href="/science/publications#thesis"
          />
          <WorkCard
            title="USP7 mutational analysis in GCB-DLBCL"
            venue="manuscript in prep"
            summary="Site-directed mutagenesis (Y243D, I660K, T730S, Y1056H), CRISPR perturbations, and structural modeling to understand PRC1.1 assembly & deubiquitinase activity."
            href="/science/projects#usp7"
          />
          <WorkCard
            title="GFI1 overexpression → CD79b regulation"
            venue="proteomics + validation"
            summary="Global proteomics in HBL1 with GFI1-OE; investigating TF network (LCK/LAT2) and cytosolic interactions (BCAR1)."
            href="/science/projects#gfi1"
          />
          <WorkCard
            title="Public datasets — BCOR/KDM2B peaks in LY1"
            venue="re-analysis"
            summary="ChIP-seq overlap & motif discovery (HOMER), excluding H3K27me3 to enrich for PRC1.1 candidates."
            href="/science/projects#bcor-kdm2b"
          />
        </div>
        <div className="mt-6 text-sm text-neutral-600">
          See also:{" "}
          <a className="underline underline-offset-4" href={links.scholar}>Google Scholar</a>{" "}
          or{" "}
          <a className="underline underline-offset-4" href={links.github}>GitHub</a> for code &amp; figures.
        </div>
      </section>

      {/* Talks */}
      <section id="talks" className="mx-auto max-w-5xl px-4 py-10 border-t border-neutral-200">
        <h2 className="text-xl font-semibold tracking-tight">Talks</h2>
        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <span className="font-medium">IRF8 mutations in DLBCL</span> — lab meeting (Apr 2025), Charité. Slides &amp; recording on request.
          </li>
          <li>
            <span className="font-medium">PRC1.1: from structure to function</span> — thesis defense (Nov 2024). Overview of USP7/PCGF1/BCOR modules and H2AK119ub dynamics.
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-12 border-t border-neutral-200">
        <Card>
          <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-neutral-700 text-sm">Email me for collaborations, postdoc opportunities, or to request my full CV.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href={links.email} rounded> <MailIcon className="mr-2"/> deborajoppi@gmail.com </Button>
            <Button href={links.linkedin} variant="secondary" rounded> <LinkedInIcon className="mr-2"/> LinkedIn </Button>
            <Button href={links.github} variant="secondary" rounded> <GitHubIcon className="mr-2"/> GitHub </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-4 py-10 text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} Débora Joppi.</p>
      </footer>
    </main>
  );
}

/* ----------------------------
   Lightweight UI primitives
-----------------------------*/
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-sm border border-neutral-200 rounded-2xl p-4 bg-white">{children}</div>
  );
}

function Button({ href, children, variant, rounded }: { href: string; children: React.ReactNode; variant?: "primary"|"secondary"; rounded?: boolean }) {
  const base = "inline-flex items-center px-4 py-2 text-sm font-medium border transition";
  const shape = rounded ? " rounded-full" : " rounded-md";
  const style = variant === "secondary"
    ? " bg-white text-neutral-900 border-neutral-300 hover:bg-neutral-100"
    : " bg-neutral-900 text-white border-neutral-900 hover:opacity-90";
  return (
    <a href={href} className={base + shape + " " + style}>{children}</a>
  );
}

function Badge({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs">
      {icon} <span>{children}</span>
    </span>
  );
}

function WorkCard({ title, venue, summary, href }: { title: string; venue: string; summary: string; href: string }) {
  return (
    <div className="shadow-sm border border-neutral-200 rounded-2xl p-5 bg-white hover:shadow-md transition-shadow">
      <Link href={href} className="block">
        <h3 className="font-medium leading-snug hover:underline underline-offset-4">{title}</h3>
      </Link>
      <div className="mt-1 text-xs uppercase tracking-wide text-neutral-500">{venue}</div>
      <p className="mt-2 text-sm text-neutral-800">{summary}</p>
    </div>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} className="p-2 rounded-full hover:bg-neutral-200">{children}</a>
  );
}

/* ----------------------------
   Tiny inline icons (SVG)
-----------------------------*/
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4h16v16H4z"/>
      <path d="M22 6l-10 7L2 6"/>
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.48-1.34-5.48-5.96 0-1.32.47-2.39 1.24-3.24-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.7.24 2.96.12 3.27.77.85 1.24 1.92 1.24 3.24 0 4.63-2.81 5.64-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0012 .5z"/>
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h4v1.8h.06c.56-1.06 1.92-2.18 3.94-2.18 4.22 0 5 2.78 5 6.4V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z"/>
    </svg>
  );
}

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M23 19V7a2 2 0 00-2-2h-3l-2-3H8L6 5H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  );
}

function FlaskIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 2h4"/><path d="M9 2v3l-6 11a4 4 0 004 6h10a4 4 0 004-6L15 5V2"/>
    </svg>
  );
}

function GradCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 10L12 6 2 10l10 4 10-4z"/><path d="M6 12v5a6 6 0 0012 0v-5"/>
    </svg>
  );
}

function MicroscopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 18h12" />
      <path d="M12 14l3-3-3-3" />
      <path d="M9 5l6 6" />
    </svg>
  );
}

function PencilIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 20h9"/><path d="M16.5 3.5l4 4L7 21H3v-4z"/>
    </svg>
  );
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <path d="M14 2v6h6"/>
    </svg>
  );
}
