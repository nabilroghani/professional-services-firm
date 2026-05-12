import { useNavigate } from "react-router-dom";
import { SERVICES } from "../data/services";
import { INDUSTRIES } from "../data/industries";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-brand-gold/10 bg-brand-navy-deep px-8 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 font-display text-2xl font-bold text-brand-gold">Accurit Malta</div>
            <p className="mb-6 max-w-[280px] text-sm leading-[1.8] text-white/45">
              Malta&apos;s trusted fixed-fee accounting firm. Compliant, clear, and committed to your growth.
            </p>
            <div className="text-[0.8rem] leading-7 text-white/40">
              <div>📍 Valletta, Malta</div>
              <div>📞 +356 2000 0000</div>
              <div>✉️ hello@accurit.mt</div>
            </div>
          </div>

          <div>
            <h5 className="mb-5 text-xs uppercase tracking-[0.1em] text-brand-gold">Services</h5>
            {SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => navigate(`/services/${service.id}`)}
                className="block py-1 text-left text-[0.85rem] text-white/45 transition-colors duration-200 hover:text-brand-gold"
              >
                {service.title}
              </button>
            ))}
          </div>

          <div>
            <h5 className="mb-5 text-xs uppercase tracking-[0.1em] text-brand-gold">Industries</h5>
            {INDUSTRIES.map((industry) => (
              <button
                key={industry.id}
                type="button"
                onClick={() => navigate(`/industries/${industry.id}`)}
                className="block py-1 text-left text-[0.85rem] text-white/45 transition-colors duration-200 hover:text-brand-gold"
              >
                {industry.label}
              </button>
            ))}
          </div>

          <div>
            <h5 className="mb-5 text-xs uppercase tracking-[0.1em] text-brand-gold">Company</h5>
            <button
              type="button"
              onClick={() => navigate("/about")}
              className="block py-1 text-left text-[0.85rem] text-white/45 transition-colors duration-200 hover:text-brand-gold"
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => navigate("/resources")}
              className="block py-1 text-left text-[0.85rem] text-white/45 transition-colors duration-200 hover:text-brand-gold"
            >
              Resources
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="block py-1 text-left text-[0.85rem] text-white/45 transition-colors duration-200 hover:text-brand-gold"
            >
              Contact
            </button>
            <button
              type="button"
              className="block py-1 text-left text-[0.85rem] text-white/45 transition-colors duration-200 hover:text-brand-gold"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-[rgba(255,255,255,0.07)] pt-8 text-[0.8rem] text-white/30 md:flex-row md:items-center">
          <p>© 2025 Accurit Malta. All rights reserved.</p>
          <p>Regulated · Malta · VAT MT12345678</p>
        </div>
      </div>
    </footer>
  );
}
