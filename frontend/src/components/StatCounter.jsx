import { useCounter } from "../hooks/useCounter";
import { useInView } from "../hooks/useInView";

export default function StatCounter({ value, label, suffix }) {
  const [ref, inView] = useInView();
  const count = useCounter(value, inView);

  return (
    <div ref={ref} className="p-6 text-center">
      <div className="font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none font-bold text-brand-gold">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.06em] text-white/55">{label}</div>
    </div>
  );
}
