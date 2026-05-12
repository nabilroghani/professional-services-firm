import { useEffect, useState } from "react";

const forms = [
  { name: "FS3 – Annual Statement of Earnings", desc: "Year-end declaration for employees and directors." },
  { name: "FS5 – Monthly Tax Return (Employers)", desc: "Monthly FSS submission for employers." },
  { name: "FS7 – End of Year Reconciliation", desc: "Annual reconciliation of FS5 submissions." },
  { name: "VAT Return Form", desc: "Quarterly VAT return for CFR-registered entities." },
  { name: "MBR Annual Return", desc: "Annual return for Malta Business Registry." },
  { name: "Personal Tax Return (IR1)", desc: "Individual income tax return for Malta residents." },
];

export default function ResourcesPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#04152C,#071E3D)] pt-[100px]">
      <div className="mx-auto max-w-[1000px] px-8 py-16">
        <div className={`transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          <p className="mb-4 text-[0.8rem] uppercase tracking-[0.15em] text-brand-gold">Downloads & Guides</p>
          <h1 className="mb-4 font-display text-[clamp(2rem,4vw,3rem)] text-white">Resources</h1>
          <p className="mb-12 text-base text-white/50">FSS forms, tax guides, and compliance checklists for Malta businesses.</p>
          <h2 className="mb-6 font-display text-[1.4rem] text-brand-gold">FSS & Tax Forms</h2>
          <div className="flex flex-col gap-3">
            {forms.map((form, index) => (
              <div
                key={form.name}
                className="flex flex-col justify-between gap-4 rounded-xl border border-brand-gold/10 bg-[rgba(255,255,255,0.03)] px-6 py-5 transition-all duration-500 md:flex-row md:items-center"
                style={{ opacity: visible ? 1 : 0, transitionDelay: `${index * 70}ms` }}
              >
                <div>
                  <div className="mb-1 text-[0.9rem] font-semibold text-white">{form.name}</div>
                  <div className="text-[0.8rem] text-white/45">{form.desc}</div>
                </div>
                <button
                  type="button"
                  className="whitespace-nowrap rounded-lg border border-brand-gold/25 bg-brand-gold/10 px-4 py-2 text-[0.8rem] text-brand-gold transition-colors duration-200 hover:bg-brand-gold/20"
                >
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
