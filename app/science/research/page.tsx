// app/science/research/page.tsx
"use client";

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

export default function Research() {
  return (
    <section id="research">
      <h1 className="text-2xl font-semibold tracking-tight">Research</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <Card
          title="USP7 mutational landscape in GCB-DLBCL"
          summary="Site-directed mutagenesis (Y243D, I660K, T730S, Y1056H), CRISPR perturbations, and structural modeling to understand PRC1.1 assembly & deubiquitinase activity."
        />
        <Card
          title="PCGF1 overexpression & H2AK119ub dynamics"
          summary="Functional genomics and CUT&Tag profiling to quantify Polycomb deposition and downstream effects."
        />
        <Card
          title="GFI1-OE and BCR signaling (CD79b)"
          summary="Global proteomics in HBL1; TF networks (LCK/LAT2) and potential BCAR1 cytosolic interactions."
        />
        <Card
          title="Public re-analysis: BCOR/KDM2B peaks in LY1"
          summary="ChIP-seq overlap & motif discovery (HOMER), excluding H3K27me3 to enrich for PRC1.1 candidates."
        />
      </div>
    </section>
  );
}
