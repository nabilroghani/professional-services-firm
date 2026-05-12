import { useNavigate } from "react-router-dom";
import { useInView } from "../hooks/useInView";

export default function CTASection() {
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-gradient-to-br from-brand-gold to-brand-gold-deep px-8 py-20">
      <div
        className={`mx-auto max-w-[800px] text-center transition-all duration-800 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3rem)] text-brand-navy">
          Ready to Simplify Your Finances?
        </h2>
        <p className="mb-10 text-[1.1rem] leading-[1.7] text-brand-navy/75">
          Book a free 15-minute consultation. Fixed-fee quote within 24 hours. No obligation.
        </p>
        <button
          type="button"
          onClick={() => navigate("/contact")}
          className="rounded-lg bg-brand-navy px-10 py-4 text-base font-bold tracking-[0.06em] text-brand-gold shadow-[0_4px_24px_rgba(4,21,44,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(4,21,44,0.4)]"
        >
          Book Free Consultation →
        </button>
      </div>
    </section>
  );
}
