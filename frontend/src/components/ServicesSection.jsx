import { SERVICES } from "../data/services";
import { useInView } from "../hooks/useInView";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="bg-[#061628] px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 text-center transition-all duration-800 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-[0.8rem] uppercase tracking-[0.15em] text-brand-gold">What We Do</p>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3rem)] text-white">Our Services</h2>
          <p className="mx-auto max-w-[500px] text-base text-white/55">
            Comprehensive financial services for Malta&apos;s business community — from day-one accounting to complex advisory.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
