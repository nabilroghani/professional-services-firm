import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INDUSTRIES } from "../data/industries";
import { SERVICES } from "../data/services";

export default function IndustryPage() {
  const { industryId } = useParams();
  const industry = INDUSTRIES.find((item) => item.id === industryId) || INDUSTRIES[0];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, [industryId]);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#04152C,#071E3D)] pt-[70px]">
      <div className="relative overflow-hidden border-b border-brand-gold/10 bg-[linear-gradient(135deg,#04152C,#071E3D)] px-8 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(199,164,84,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(199,164,84,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className={`mb-4 text-[3rem] transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
            {industry.icon}
          </div>
          <h1
            className={`mb-4 font-display text-[clamp(2rem,5vw,3.5rem)] text-white transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            {industry.label}
          </h1>
          <p className={`max-w-[500px] text-base leading-[1.8] text-white/55 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
            {industry.desc}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-8 py-16">
        <p className={`text-base leading-[1.9] text-white/55 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Our team has deep experience serving {industry.label.toLowerCase()} businesses in Malta. We understand the regulatory environment, sector-specific tax treatment, and the compliance obligations unique to your industry. Whether you&apos;re a startup or an established firm, Accurit brings the expertise to keep you fully compliant and financially optimised.
        </p>

        <h2 className={`mt-12 mb-6 font-display text-2xl text-brand-gold transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
          Services for {industry.label}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {SERVICES.slice(0, 4).map((service, index) => (
            <div
              key={service.id}
              className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] p-6 transition-all duration-500"
              style={{ opacity: visible ? 1 : 0, transitionDelay: `${500 + index * 80}ms` }}
            >
              <div className="mb-3 text-2xl">{service.icon}</div>
              <h4 className="mb-2 font-display text-base text-white">{service.title}</h4>
              <p className="text-[0.8rem] text-white/45">{service.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
