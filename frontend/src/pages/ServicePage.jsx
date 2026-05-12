import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVICES } from "../data/services";

export default function ServicePage() {
  const { serviceId } = useParams();
  const service = SERVICES.find((item) => item.id === serviceId) || SERVICES[0];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, [serviceId]);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#04152C,#071E3D)] pt-[70px]">
      <div className="relative overflow-hidden border-b border-brand-gold/10 bg-[linear-gradient(135deg,#04152C_0%,#071E3D_100%)] px-8 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(199,164,84,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(199,164,84,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className={`mb-4 text-[3rem] transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
            {service.icon}
          </div>
          <h1
            className={`mb-4 font-display text-[clamp(2rem,5vw,3.5rem)] text-white transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            {service.title}
          </h1>
          <p className={`text-[1.15rem] italic text-brand-gold transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
            {service.tagline}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-16 px-8 py-16 lg:grid-cols-[2fr_1fr]">
        <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
          <h2 className="mb-6 font-display text-2xl text-brand-gold">Overview</h2>
          <p className="mb-12 text-base leading-[1.9] text-white/70">{service.description}</p>
          <h2 className="mb-6 font-display text-2xl text-brand-gold">What&apos;s Included</h2>
          <div className="flex flex-col gap-3">
            {service.features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-[10px] border border-brand-gold/10 bg-[rgba(255,255,255,0.03)] px-5 py-4 transition-all duration-500"
                style={{ opacity: visible ? 1 : 0, transitionDelay: `${400 + index * 80}ms` }}
              >
                <span className="mt-0.5 text-sm text-brand-gold">✓</span>
                <span className="text-[0.9rem] text-white/75">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <div className="sticky top-[90px] rounded-2xl border border-brand-gold/20 bg-[rgba(199,164,84,0.06)] p-8">
            <h3 className="mb-4 font-display text-[1.2rem] text-brand-gold">Get a Quote</h3>
            <p className="mb-6 text-[0.875rem] leading-[1.7] text-white/55">
              Fixed-fee quote within 24 hours. No obligation.
            </p>
            <div className="flex flex-col gap-3">
              <input
                placeholder="Your Name"
                className="rounded-lg border border-brand-gold/20 bg-white/5 px-4 py-3 text-[0.875rem] text-white outline-none"
              />
              <input
                placeholder="Email"
                className="rounded-lg border border-brand-gold/20 bg-white/5 px-4 py-3 text-[0.875rem] text-white outline-none"
              />
              <button
                type="button"
                className="rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-deep px-4 py-3 text-[0.875rem] font-bold text-brand-navy"
              >
                Request a Quote →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
