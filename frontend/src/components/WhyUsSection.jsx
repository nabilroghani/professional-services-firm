import { useInView } from "../hooks/useInView";

const points = [
  { icon: "🎯", title: "Fixed Fees", desc: "No surprise invoices. You know your monthly cost from day one." },
  { icon: "👤", title: "Dedicated Accountant", desc: "One point of contact who knows your business inside out." },
  { icon: "☁️", title: "Cloud-Based Access", desc: "View your financials 24/7 through Xero or QuickBooks." },
  { icon: "⏰", title: "Always On Time", desc: "98% of our submissions are filed before the deadline — guaranteed." },
  { icon: "🇲🇹", title: "Malta Specialists", desc: "Deep knowledge of CFR, MBR, FSS, and Malta's regulatory landscape." },
  { icon: "🤝", title: "Long-Term Partners", desc: "90% of our clients renew year after year. We grow as you grow." },
];

export default function WhyUsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="bg-[linear-gradient(135deg,#061628,#071E3D)] px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <div className={`mb-16 text-center transition-opacity duration-800 ${inView ? "opacity-100" : "opacity-0"}`}>
          <p className="mb-4 text-[0.8rem] uppercase tracking-[0.15em] text-brand-gold">The Accurit Difference</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {points.map((point, index) => (
            <div
              key={point.title}
              className={`rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] p-8 transition-all duration-700 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 text-[1.8rem]">{point.icon}</div>
              <h4 className="mb-2 font-display text-[1.1rem] text-brand-gold">{point.title}</h4>
              <p className="text-[0.875rem] leading-[1.7] text-white/55">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
