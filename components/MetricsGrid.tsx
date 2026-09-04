import type { Metric } from "@/content/projects";

export function MetricsGrid({ metrics }: { metrics: Metric[] }) {
  const visibleMetrics = metrics.filter((m) => !m.placeholder);

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
      {visibleMetrics.map((m, i) => (
        <li key={`${m.label}-${i}`} className="border-t border-ink/15 pt-4">
          <div className="font-display tracking-tighter2 text-4xl md:text-5xl leading-none text-ink">
            {m.value}
          </div>
          <div className="mt-3 text-sm uppercase tracking-[0.12em] text-ink/70">{m.label}</div>
          {m.note ? (
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
              {m.note}
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
