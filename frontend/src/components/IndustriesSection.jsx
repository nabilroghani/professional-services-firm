import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { INDUSTRIES } from "../data/industries";
import { useInView } from "../hooks/useInView";

export default function IndustriesSection() {
  const navigate = useNavigate();
  const [ref, inView] = useInView(0.1);
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0]);

  return (
    <section ref={ref} className="bg-brand-navy px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <div className={`mb-16 text-center transition-opacity duration-800 ${inView ? "opacity-100" : "opacity-0"}`}>
          <p className="mb-4 text-[0.8rem] uppercase tracking-[0.15em] text-brand-gold">Sectors We Serve</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white">Industries</h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            {INDUSTRIES.map((industry, index) => {
              const active = activeIndustry.id === industry.id;

              return (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => {
                    setActiveIndustry(industry);
                    navigate(`/industries/${industry.id}`);
                  }}
                  onMouseEnter={() => setActiveIndustry(industry)}
                  className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-200 ${
                    active
                      ? "border-brand-gold/30 bg-[rgba(199,164,84,0.08)]"
                      : "border-transparent bg-transparent"
                  } ${inView ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"}`}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <span className="text-[1.4rem]">{industry.icon}</span>
                  <span className={`text-base font-semibold ${active ? "text-brand-gold" : "text-white/75"}`}>
                    {industry.label}
                  </span>
                  {active && <span className="ml-auto text-lg text-brand-gold">→</span>}
                </button>
              );
            })}
          </div>

          <div
            className={`rounded-[20px] border border-brand-gold/15 bg-[rgba(255,255,255,0.03)] p-12 transition-opacity duration-800 delay-300 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="mb-6 text-[3rem]">{activeIndustry.icon}</div>
            <h3 className="mb-4 font-display text-[1.8rem] text-brand-gold">{activeIndustry.label}</h3>
            <p className="mb-8 text-base leading-[1.8] text-white/65">{activeIndustry.desc}</p>
            <button
              type="button"
              onClick={() => navigate(`/industries/${activeIndustry.id}`)}
              className="rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-deep px-7 py-3 text-[0.85rem] font-bold text-brand-navy transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore {activeIndustry.label} Services →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
