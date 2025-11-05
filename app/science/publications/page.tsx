// app/science/publications/page.tsx
"use client";

type Pub = {
  year: number;
  title: string;
  venue?: string;
  authors?: string;
  href?: string;
  note?: string;
};

const pubs: Pub[] = [
  {
    year: 2025,
    title: "USP7 mutations rewire PRC1.1 activity in GCB-DLBCL",
    note: "manuscript in preparation",
  },
  {
    year: 2025,
    title: "GFI1 overexpression modulates CD79b networks in HBL1",
    note: "proteomics + validation — in prep",
  },
  {
    year: 2024,
    title: "Deciphering the oncogenic role of PRC1 complexes in DLBCL (PhD Thesis)",
    venue: "University of Göttingen",
    href: "#",
  },
];

export default function Publications() {
  const byYear = new Map<number, Pub[]>();
  pubs.forEach((p) => {
    const arr = byYear.get(p.year) ?? [];
    arr.push(p);
    byYear.set(p.year, arr);
  });
  const sorted = [...byYear.entries()].sort((a, b) => b[0] - a[0]);

  return (
    <section id="publications">
      <h1 className="text-2xl font-semibold tracking-tight">Publications & manuscripts</h1>
      <div className="mt-6 space-y-8">
        {sorted.map(([year, items]) => (
          <div key={year}>
            <div className="text-sm font-medium text-neutral-500">{year}</div>
            <ol className="mt-3 space-y-3">
              {items.map((p, i) => (
                <li key={i} className="text-sm leading-relaxed">
                  {p.authors ? <span className="text-neutral-700">{p.authors}. </span> : null}
                  <span className="font-medium">{p.title}</span>
                  {p.venue ? <> — <em>{p.venue}</em></> : null}
                  {p.note ? <> — <span className="text-neutral-500">{p.note}</span></> : null}
                  {p.href ? (
                    <>
                      {" "}
                      <a className="underline underline-offset-4" href={p.href} target="_blank">
                        link
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
