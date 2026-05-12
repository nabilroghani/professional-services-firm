import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { SERVICES } from "../data/services";
import { INDUSTRIES } from "../data/industries";

// ─── shared class helpers ────────────────────────────────────────────────────

const baseNavLinkClass =
  "relative bg-transparent py-2 text-sm font-medium uppercase tracking-[0.06em] transition-colors duration-200 group";

const navLinkClass = ({ isActive }) =>
  `${baseNavLinkClass} ${isActive ? "text-brand-gold" : "text-white/85 hover:text-brand-gold"}`;

// Animated underline span — shared by all desktop links
function Underline({ active }) {
  return (
    <span
      className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-brand-gold transition-all duration-300 ease-out ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled]       = useState(false);
  const [servicesOpen, setServicesOpen]     = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [mobileServices, setMobileServices]   = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);

  const drawerRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileServices(false);
    setMobileIndustries(false);
  }, [location.pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const serviceActive  = location.pathname.startsWith("/services/");
  const industryActive = location.pathname.startsWith("/industries/");

  const go = (path) => {
    navigate(path);
    setServicesOpen(false);
    setIndustriesOpen(false);
  };

  return (
    <>
      {/* ── NAV BAR ─────────────────────────────────────────────────────── */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 px-6 md:px-8 transition-all duration-300 ${
          scrolled
            ? "border-b border-brand-gold/15 bg-[rgba(4,21,44,0.97)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="select-none font-display text-[1.6rem] font-bold tracking-[0.04em] text-brand-gold z-10"
          >
            Accurit<span className="font-light text-white"> Malta</span>
          </Link>

          {/* ── DESKTOP LINKS ─────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-7 relative">

            {/* Simple links */}
            {[
              { to: "/",         label: "Home",      end: true },
              { to: "/about",    label: "About" },
              { to: "/resources",label: "Resources" },
              { to: "/contact",  label: "Contact" },
            ].map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={navLinkClass}>
                {({ isActive }) => (
                  <>
                    {label}
                    <Underline active={isActive} />
                  </>
                )}
              </NavLink>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`${baseNavLinkClass} flex items-center gap-1 ${
                  serviceActive ? "text-brand-gold" : "text-white/85 hover:text-brand-gold"
                }`}
              >
                Services
                <span className={`text-[9px] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>▼</span>
                <Underline active={serviceActive} />
              </button>

              {/* Dropdown panel */}
              <div className={`absolute left-1/2 top-full z-[60] min-w-[280px] -translate-x-1/2
                rounded-xl border border-brand-gold/20 bg-[rgba(4,21,44,0.98)] py-3
                shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl
                transition-all duration-200 origin-top
                ${servicesOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
              >
                {/* Gold top accent line */}
                <div className="mx-4 mb-3 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => go(`/services/${s.id}`)}
                    className="group/item flex w-full items-center gap-3 px-5 py-2 text-left text-sm text-white/80
                      transition-all duration-200 hover:bg-brand-gold/5 hover:text-brand-gold"
                  >
                    <span className="text-base transition-transform duration-200 group-hover/item:scale-110">
                      {s.icon}
                    </span>
                    <span className="flex-1">{s.title}</span>
                    <span className="translate-x-0 text-brand-gold/0 text-xs transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:text-brand-gold">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Industries dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                type="button"
                className={`${baseNavLinkClass} flex items-center gap-1 ${
                  industryActive ? "text-brand-gold" : "text-white/85 hover:text-brand-gold"
                }`}
              >
                Industries
                <span className={`text-[9px] transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}>▼</span>
                <Underline active={industryActive} />
              </button>

              <div className={`absolute left-1/2 top-full z-[60] min-w-[220px] -translate-x-1/2
                rounded-xl border border-brand-gold/20 bg-[rgba(4,21,44,0.98)] py-3
                shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl
                transition-all duration-200 origin-top
                ${industriesOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
              >
                <div className="mx-4 mb-3 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => go(`/industries/${ind.id}`)}
                    className="group/item flex w-full items-center gap-3 px-5 py-2 text-left text-sm text-white/80
                      transition-all duration-200 hover:bg-brand-gold/5 hover:text-brand-gold"
                  >
                    <span className="text-base transition-transform duration-200 group-hover/item:scale-110">
                      {ind.icon}
                    </span>
                    <span className="flex-1">{ind.label}</span>
                    <span className="translate-x-0 text-brand-gold/0 text-xs transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:text-brand-gold">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => go("/contact")}
              className="rounded-md bg-gradient-to-br from-brand-gold to-brand-gold-deep
                px-6 py-2.5 text-[0.8rem] font-bold uppercase tracking-[0.08em] text-brand-navy
                transition-all duration-200 hover:-translate-y-0.5
                hover:shadow-[0_6px_24px_rgba(199,164,84,0.4)]"
            >
              Get a Quote
            </button>
          </div>

          {/* ── HAMBURGER BUTTON (mobile only) ────────────────────────── */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-[110] flex md:hidden h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg
              border border-white/10 bg-white/5 backdrop-blur-sm
              transition-all duration-200 hover:border-brand-gold/40 hover:bg-brand-gold/10"
          >
            {/* 3 bars → X morph */}
            <span className={`block h-[2px] w-5 rounded-full bg-brand-gold origin-center
              transition-all duration-300 ease-in-out
              ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`block h-[2px] w-5 rounded-full bg-white/80
              transition-all duration-200
              ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span className={`block h-[2px] w-5 rounded-full bg-brand-gold origin-center
              transition-all duration-300 ease-in-out
              ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* ── MOBILE BACKDROP ───────────────────────────────────────────────── */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm md:hidden
          transition-opacity duration-300
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* ── MOBILE DRAWER ─────────────────────────────────────────────────── */}
      <aside
        ref={drawerRef}
        className={`fixed right-0 top-0 z-[100] flex h-full w-[85vw] max-w-[340px] flex-col
          border-l border-brand-gold/15
          bg-gradient-to-b from-[#04152C] via-[#071E3D] to-[#04152C]
          shadow-[-8px_0_40px_rgba(0,0,0,0.6)]
          transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-brand-gold/10 px-6 py-5">
          <Link to="/" className="font-display text-xl font-bold text-brand-gold">
            Accurit<span className="font-light text-white"> Malta</span>
          </Link>
          {/* Close X */}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10
              text-white/60 transition-all duration-200 hover:border-brand-gold/40 hover:text-brand-gold"
          >
            ✕
          </button>
        </div>

        {/* Gold accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="flex flex-col gap-1">

            {/* Simple links */}
            {[
              { to: "/",          label: "Home",       end: true },
              { to: "/about",     label: "About" },
              { to: "/resources", label: "Resources" },
              { to: "/contact",   label: "Contact" },
            ].map(({ to, label, end }, i) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMobileOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3
                  text-sm font-medium uppercase tracking-[0.07em]
                  transition-all duration-200
                  ${mobileOpen ? "animate-slide-in" : ""}
                  ${isActive
                    ? "bg-brand-gold/10 text-brand-gold border border-brand-gold/25"
                    : "text-white/75 hover:bg-white/5 hover:text-white border border-transparent"
                  }`
                }
              >
                {label}
                <span className="text-brand-gold/50 text-xs">→</span>
              </NavLink>
            ))}

            {/* Divider */}
            <div className="my-3 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Services accordion */}
            <MobileAccordion
              label="Services"
              isOpen={mobileServices}
              toggle={() => setMobileServices((v) => !v)}
              isActive={serviceActive}
              delay={4 * 60}
              mobileOpen={mobileOpen}
            >
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(`/services/${s.id}`)}
                  className="group/mob flex w-full items-center gap-3 rounded-md px-4 py-2.5
                    text-left text-sm text-white/65 transition-all duration-200
                    hover:bg-brand-gold/8 hover:text-brand-gold"
                >
                  <span className="text-base">{s.icon}</span>
                  <span className="flex-1">{s.title}</span>
                  <span className="text-[10px] text-brand-gold/0 transition-all duration-200 group-hover/mob:text-brand-gold">→</span>
                </button>
              ))}
            </MobileAccordion>

            {/* Industries accordion */}
            <MobileAccordion
              label="Industries"
              isOpen={mobileIndustries}
              toggle={() => setMobileIndustries((v) => !v)}
              isActive={industryActive}
              delay={5 * 60}
              mobileOpen={mobileOpen}
            >
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => go(`/industries/${ind.id}`)}
                  className="group/mob flex w-full items-center gap-3 rounded-md px-4 py-2.5
                    text-left text-sm text-white/65 transition-all duration-200
                    hover:bg-brand-gold/8 hover:text-brand-gold"
                >
                  <span className="text-base">{ind.icon}</span>
                  <span className="flex-1">{ind.label}</span>
                  <span className="text-[10px] text-brand-gold/0 transition-all duration-200 group-hover/mob:text-brand-gold">→</span>
                </button>
              ))}
            </MobileAccordion>
          </div>
        </nav>

        {/* Drawer footer CTA */}
        <div className="border-t border-brand-gold/10 p-5">
          <button
            type="button"
            onClick={() => go("/contact")}
            className="w-full rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-deep
              py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy
              transition-all duration-200 hover:shadow-[0_4px_24px_rgba(199,164,84,0.4)]
              active:scale-[0.98]"
          >
            Get a Free Quote →
          </button>
          <p className="mt-3 text-center text-[11px] text-white/30 tracking-wide">
            Fixed-fee quote within 24 hours
          </p>
        </div>
      </aside>
    </>
  );
}

// ─── Mobile Accordion Component ──────────────────────────────────────────────

function MobileAccordion({ label, isOpen, toggle, isActive, children, delay, mobileOpen }) {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className={mobileOpen ? "animate-slide-in" : ""}
    >
      <button
        type="button"
        onClick={toggle}
        className={`flex w-full items-center justify-between rounded-lg px-4 py-3
          text-sm font-medium uppercase tracking-[0.07em]
          transition-all duration-200 border
          ${isActive
            ? "bg-brand-gold/10 text-brand-gold border-brand-gold/25"
            : "text-white/75 hover:bg-white/5 hover:text-white border-transparent"
          }`}
      >
        {label}
        <span className={`text-brand-gold text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Animated expand */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="ml-3 mt-1 border-l border-brand-gold/20 pl-2 pb-2 flex flex-col gap-0.5">
          {children}
        </div>
      </div>
    </div>
  );
}
