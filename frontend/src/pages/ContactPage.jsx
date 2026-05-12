import { useEffect, useState } from "react";
import { SERVICES } from "../data/services";

const contactItems = [
  { icon: "📍", label: "Address", val: "Valletta, Malta, VLT 1000" },
  { icon: "📞", label: "Phone", val: "+356 2000 0000" },
  { icon: "✉️", label: "Email", val: "hello@accurit.mt" },
  { icon: "🕐", label: "Hours", val: "Mon–Fri, 9am–5pm CET" },
];

export default function ContactPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#04152C,#071E3D)] pt-[100px]">
      <div className="mx-auto max-w-[900px] px-8 py-16">
        <div className={`mb-12 text-center transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          <p className="mb-4 text-[0.8rem] uppercase tracking-[0.15em] text-brand-gold">Talk to Us</p>
          <h1 className="mb-4 font-display text-[clamp(2rem,5vw,3rem)] text-white">Get in Touch</h1>
          <p className="text-base text-white/50">Free 15-minute consultation. Fixed-fee quote within 24 hours.</p>
        </div>

        <div className={`grid gap-12 transition-all duration-700 delay-200 lg:grid-cols-[1fr_1.5fr] ${visible ? "opacity-100" : "opacity-0"}`}>
          <div>
            {contactItems.map((item) => (
              <div key={item.label} className="mb-6 flex gap-3.5">
                <span className="text-[1.3rem]">{item.icon}</span>
                <div>
                  <div className="mb-1 text-[0.75rem] uppercase tracking-[0.08em] text-brand-gold">{item.label}</div>
                  <div className="text-[0.9rem] text-white/70">{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-brand-gold/15 bg-[rgba(255,255,255,0.03)] p-10">
            <div className="flex flex-col gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  placeholder="First Name"
                  className="rounded-lg border border-brand-gold/15 bg-white/5 px-4 py-3 text-[0.875rem] text-white outline-none"
                />
                <input
                  placeholder="Last Name"
                  className="rounded-lg border border-brand-gold/15 bg-white/5 px-4 py-3 text-[0.875rem] text-white outline-none"
                />
              </div>
              <input
                placeholder="Email Address"
                className="rounded-lg border border-brand-gold/15 bg-white/5 px-4 py-3 text-[0.875rem] text-white outline-none"
              />
              <select className="rounded-lg border border-brand-gold/15 bg-[rgba(4,21,44,0.9)] px-4 py-3 text-[0.875rem] text-white/70 outline-none">
                <option value="">Select a service…</option>
                {SERVICES.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your business…"
                className="resize-y rounded-lg border border-brand-gold/15 bg-white/5 px-4 py-3 text-[0.875rem] text-white outline-none"
              />
              <button
                type="button"
                className="rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-deep px-4 py-4 text-[0.95rem] font-bold text-brand-navy transition-transform duration-200 hover:-translate-y-0.5"
              >
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
