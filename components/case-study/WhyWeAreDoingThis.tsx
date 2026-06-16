import type { ReactNode } from "react";
import { whyWeAreDoingThis, interactionModes } from "@/content/ai-copilot-research";

function UnstructuredIcon() {
  return (
    <div className="relative h-14 w-[4rem] shrink-0" aria-hidden>
      <div className="absolute left-0 top-2 h-10 w-9 rounded-lg bg-[#1a3d2e] shadow-sm" />
      <div className="absolute left-3 top-0 h-10 w-9 rounded-lg border border-ink/10 bg-[#e8ece9] p-1.5">
        <div className="h-1 w-5 rounded-full bg-ink/20" />
        <div className="mt-1 h-0.5 w-4 rounded-full bg-ink/15" />
        <div className="mt-1.5 flex gap-0.5 items-end h-2.5">
          {[3, 5, 4, 6, 3].map((h, i) => (
            <span
              key={i}
              className="w-0.5 rounded-full bg-[#25D366]"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StructuredIcon() {
  return (
    <div
      className="h-14 w-10 shrink-0 rounded-lg border-2 border-ink/15 bg-white p-1 shadow-sm"
      aria-hidden
    >
      <div className="h-1 w-full rounded-sm bg-ink/10" />
      <div className="mt-1.5 rounded bg-[#25D366] px-0.5 py-0.5 text-center">
        <span className="text-[6px] font-semibold text-white leading-none">Add Lead</span>
      </div>
      <div className="mt-1 h-0.5 w-full rounded-sm bg-ink/10" />
    </div>
  );
}

function ModeCard({
  mode,
  icon
}: {
  mode: (typeof interactionModes.modes)[number];
  icon: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-ink/10 bg-white p-5 md:p-6 h-full">
      <div className="flex items-start gap-3">
        {icon}
        <h5 className="font-display text-base md:text-lg leading-tight tracking-tightish text-ink pt-0.5">
          {mode.title}
        </h5>
      </div>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45 mb-0.5">
            Primary interface
          </dt>
          <dd className="text-ink/75 leading-snug">{mode.primaryInterface}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45 mb-0.5">
            Best for
          </dt>
          <dd className="text-ink/75 leading-snug">{mode.bestFor}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45 mb-0.5">
            Example
          </dt>
          <dd className="text-ink/60 leading-snug font-mono text-[12px]">{mode.example}</dd>
        </div>
      </dl>
    </div>
  );
}

export function WhyWeAreDoingThis() {
  const [market, opportunity] = whyWeAreDoingThis.sections;
  const [unstructured, structured] = interactionModes.modes;

  return (
    <article className="mt-12 border border-ink/10 bg-white rounded-[20px] p-8 md:p-12 lg:p-16 shadow-[0_1px_0_rgba(10,10,10,0.04)]">
      <h3 className="font-display text-2xl md:text-[1.5rem] leading-8 tracking-[-0.025em] text-ink">
        <span aria-hidden className="mr-1.5">
          🤔
        </span>
        {whyWeAreDoingThis.title}
      </h3>

      <div className="mt-6 md:mt-[26px] space-y-6 md:space-y-[26px]">
        <section className="space-y-2.5">
          <h4 className="text-base font-medium leading-[22px] tracking-[-0.025em] text-ink">
            {market.heading}
          </h4>
          <p className="text-base font-normal leading-[22px] tracking-[-0.025em] text-ink/65">
            {market.body}
          </p>
        </section>

        <section className="space-y-2.5">
          <h4 className="text-base font-medium leading-[22px] tracking-[-0.025em] text-ink">
            {opportunity.heading}
          </h4>
          <p className="text-base font-normal leading-[22px] tracking-[-0.025em] text-ink/65">
            {opportunity.bodyBeforeLink}
            <a
              href={opportunity.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5858ff] underline decoration-solid underline-offset-2 hover:text-[#4040e0] transition-colors"
            >
              {opportunity.link.label}
            </a>
            {opportunity.bodyAfterLink}
          </p>
        </section>
      </div>

      <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-ink/10">
        <p className="text-sm md:text-base text-ink/65 leading-relaxed mb-6">
          {interactionModes.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <ModeCard mode={unstructured} icon={<UnstructuredIcon />} />
          <ModeCard mode={structured} icon={<StructuredIcon />} />
        </div>
      </div>
    </article>
  );
}
