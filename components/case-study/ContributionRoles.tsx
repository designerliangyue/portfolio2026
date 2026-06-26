"use client";

import { contribution } from "@/content/ai-copilot-interactive";
import { useLocale } from "@/components/LocaleProvider";

export function ContributionRoles() {
  const { locale } = useLocale();
  const c = contribution[locale];

  return (
    <div className="mt-12 space-y-10 md:space-y-12">
      {/* Value to agents */}
      <div className="border border-ink/10 bg-paper p-6 md:p-10 lg:p-12">
        <p className="label mb-6">{c.valueLabel}</p>
        <p className="font-display tracking-tighter2 leading-[1.08] text-ink text-[clamp(1.875rem,4.2vw,3.4rem)]">
          {c.headline}
        </p>
        <p className="mt-6 text-base md:text-lg text-ink/70 leading-relaxed">{c.body}</p>
        <ul className="mt-7 flex flex-wrap gap-2.5">
          {c.chips.map((chip) => (
            <li
              key={chip}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 border border-ink/15 rounded-full px-3 py-1.5"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>

      {/* Three roles, one accountable thread */}
      <div>
        <p className="label mb-6">{c.rolesLabel}</p>
        <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {c.roles.map((role) => (
            <div key={role.id} className="bg-paper p-6 md:p-8">
              <p className="font-mono text-sm text-accent tracking-[0.1em] mb-5">{role.number}</p>
              <h4 className="font-display text-xl md:text-2xl tracking-tightish text-ink mb-3">
                {role.title}
              </h4>
              <p className="text-sm md:text-base text-ink/70 leading-relaxed">{role.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
