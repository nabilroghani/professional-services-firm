import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const particles = [
    { top: "15%", left: "5%", size: "h-1 w-1", animation: "animate-float-slow", delay: "0s" },
    { top: "28%", left: "20%", size: "h-0.5 w-0.5", animation: "animate-float-mid", delay: "0.4s" },
    { top: "41%", left: "35%", size: "h-1 w-1", animation: "animate-float-fast", delay: "0.8s" },
    { top: "54%", left: "50%", size: "h-0.5 w-0.5", animation: "animate-float-slow", delay: "1.2s" },
    { top: "67%", left: "65%", size: "h-1 w-1", animation: "animate-float-mid", delay: "1.6s" },
    { top: "80%", left: "80%", size: "h-0.5 w-0.5", animation: "animate-float-fast", delay: "2s" },
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(135deg,#04152C_0%,#071E3D_50%,#0A2648_100%)]">
      <div className="animate-grid-move absolute inset-0 bg-[linear-gradient(rgba(199,164,84,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(199,164,84,0.04)_1px,transparent_1px)] bg-[length:60px_60px]" />
      <div className="animate-pulse-glow pointer-events-none absolute top-[20%] right-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(199,164,84,0.08)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(24,95,165,0.12)_0%,transparent_70%)]" />

      {particles.map((particle, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-brand-gold/40 ${particle.size} ${particle.animation}`}
          style={{ top: particle.top, left: particle.left, animationDelay: particle.delay }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-8">
        <div className="max-w-[760px]">
          <div
            className={`mb-8 inline-flex items-center gap-2.5 rounded-full border border-brand-gold/25 bg-brand-gold/10 px-4 py-1.5 transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-brand-gold">
              Malta&apos;s Premier Accounting Firm
            </span>
          </div>

          <h1
            className={`mb-6 font-display text-[clamp(2.8rem,6vw,5rem)] leading-[1.1] font-bold text-white transition-all duration-800 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Financial Clarity
            <br />
            <span className="bg-gradient-to-br from-brand-gold via-[#E8C97A] to-brand-gold bg-clip-text text-transparent">
              For Malta&apos;s Business
            </span>
          </h1>

          <p
            className={`mb-10 max-w-[560px] text-[1.15rem] leading-[1.8] text-white/65 transition-all duration-800 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Fixed-fee accounting, audit, tax, and payroll services for self-employed professionals, SMEs, and limited companies across Malta. No surprises. No jargon.
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-800 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-deep px-9 py-3.5 text-[0.95rem] font-bold tracking-[0.06em] text-brand-navy shadow-[0_4px_24px_rgba(199,164,84,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(199,164,84,0.45)]"
            >
              Get a Free Quote
            </button>
            <button
              type="button"
              onClick={() => navigate("/services/accounting-bookkeeping")}
              className="rounded-lg border border-white/25 px-9 py-3.5 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:border-brand-gold hover:text-brand-gold"
            >
              Explore Services →
            </button>
          </div>
        </div>

        <div
          className={`absolute top-1/2 right-8 hidden min-w-[260px] -translate-y-1/2 rounded-2xl border border-brand-gold/15 bg-white/5 p-8 backdrop-blur-xl transition-all duration-1000 lg:block ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.1em] text-brand-gold">Why Accurit</p>
          {["Fixed monthly fees", "Dedicated accountant", "CFR & MBR liaison", "Cloud-based access"].map(
            (item, index) => (
              <div
                key={item}
                className={`mb-3 flex items-center gap-2.5 transition-all duration-500 ${
                  visible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <span className="text-sm text-brand-gold">✓</span>
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="animate-bounce-soft absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50">
        <span className="text-[0.7rem] uppercase tracking-[0.15em] text-brand-gold">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-brand-gold to-transparent" />
      </div>
    </section>
  );
}
