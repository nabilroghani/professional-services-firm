import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ service, index, inView }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={() => navigate(`/services/${service.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-2xl border p-8 text-left transition-all duration-300 ${
        hovered
          ? "border-brand-gold/35 bg-[rgba(199,164,84,0.06)] -translate-y-1.5"
          : "border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)]"
      } ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="mb-4 text-[2rem]">{service.icon}</div>
      <h3 className={`mb-2 font-display text-[1.2rem] ${hovered ? "text-brand-gold" : "text-white"}`}>
        {service.title}
      </h3>
      <p className="mb-6 text-[0.85rem] leading-relaxed text-white/50 italic">{service.tagline}</p>
      <p className="text-[0.875rem] leading-[1.7] text-white/60">
        {service.description.slice(0, 120)}…
      </p>
      <div
        className={`mt-6 flex items-center gap-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-brand-gold transition-transform duration-200 ${
          hovered ? "translate-x-1.5" : ""
        }`}
      >
        Learn More <span>→</span>
      </div>
    </button>
  );
}
