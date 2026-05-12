import { useEffect, useState } from "react";

const stats = [
  { val: "12+", label: "Years in Malta" },
  { val: "250+", label: "Active Clients" },
  { val: "100%", label: "Licensed Accountants" },
  { val: "24h", label: "Quote Turnaround" },
];

export default function AboutPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#04152C,#071E3D)] pt-[100px]">
      <div className="mx-auto max-w-[1000px] px-8 py-16">
        <div className={`transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          <p className="mb-4 text-[0.8rem] uppercase tracking-[0.15em] text-brand-gold">Who We Are</p>
          <h1 className="mb-8 font-display text-[clamp(2rem,5vw,3rem)] text-white">About Accurit</h1>
          <p className="mb-6 text-[1.05rem] leading-[1.9] text-white/65">
            Accurit was founded with one simple belief: accounting should be clear, predictable, and stress-free. We work exclusively with Malta-based businesses — from solo traders to growing SMEs and limited companies — handling all their financial and compliance needs.
          </p>
          <p className="mb-12 text-[1.05rem] leading-[1.9] text-white/65">
            Our team of licensed Maltese accountants combines deep regulatory expertise with modern cloud accounting tools, so you get real-time visibility and zero deadline stress. Every client gets a dedicated accountant, fixed monthly fees, and a direct line — not a call queue.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl border border-brand-gold/15 bg-[rgba(199,164,84,0.06)] p-7 text-center">
                <div className="font-display text-[2.5rem] font-bold text-brand-gold">{item.val}</div>
                <div className="mt-1.5 text-[0.8rem] uppercase tracking-[0.08em] text-white/45">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
