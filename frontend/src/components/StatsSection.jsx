import StatCounter from "./StatCounter";
import { STATS } from "../data/stats";
import { useInView } from "../hooks/useInView";

export default function StatsSection() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="border-y border-brand-gold/10 bg-brand-navy">
      <div className="mx-auto max-w-6xl px-8 py-16">
        <div
          className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 transition-opacity duration-800 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
