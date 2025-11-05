// app/science/page.tsx
"use client";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="shrink-0">
          <div className="size-32 md:size-40 rounded-full overflow-hidden ring-1 ring-neutral-200 bg-neutral-100">
            <img
              src={`${base}/debora-portrait.jpg`}
              alt="Débora Joppi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold tracking-tight">About</h1>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Postdoctoral researcher at Charité (Berlin). I study how mutations in{" "}
            <em>PRC1.1</em> (USP7, PCGF1, BCOR, KDM2B) reshape chromatin and drive DLBCL.
            I integrate functional assays with spatial genomics and structure-guided models
            (AlphaFold, PyMOL) to generate mechanistic & biomarker hypotheses.
          </p>

          <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-neutral-700">
            {[
              "Cancer epigenetics (PRC1.1: USP7, PCGF1, BCOR, KDM2B)",
              "Functional & spatial genomics (CUT&Tag, ChIP-seq, RNA-seq)",
              "Structure-guided hypotheses (AlphaFold, PyMOL)",
              "DLBCL mechanistic models & biomarkers",
            ].map((ri) => (
              <li key={ri} className="flex items-start gap-2">
                <span className="mt-[6px] size-1.5 rounded-full bg-neutral-400" />
                <span>{ri}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
