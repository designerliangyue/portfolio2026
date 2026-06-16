import { productScope, type FlowStepType } from "@/content/ai-copilot-product";

const cardShell =
  "mt-12 border border-ink/10 bg-white rounded-[20px] p-8 md:p-12 lg:p-16 shadow-[0_1px_0_rgba(10,10,10,0.04)]";

const stepStyles: Record<FlowStepType, string> = {
  system: "border-ink/20 bg-ink/[0.04] text-ink",
  agent: "border-amber-300/80 bg-amber-50/90 text-ink",
  customer: "border-ink/15 bg-white text-ink/80",
  decision: "border-dashed border-ink/25 bg-white text-ink/70 font-mono text-[11px] uppercase tracking-[0.12em]",
  end: "border-ink bg-ink text-paper font-medium"
};

function FlowStep({ type, text }: { type: FlowStepType; text: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-fit max-w-full px-4 py-2.5 text-center text-sm leading-snug rounded-lg border ${stepStyles[type]}`}
      >
        {text}
      </div>
      {type !== "end" ? (
        <span className="my-1.5 block h-4 w-px bg-ink/20" aria-hidden />
      ) : null}
    </div>
  );
}

export function ProductScopePhases() {
  return (
    <article className={cardShell}>
      <h3 className="font-display text-2xl md:text-[1.5rem] leading-8 tracking-[-0.025em] text-ink">
        {productScope.title}
      </h3>

      <div className="mt-6 md:mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {productScope.phases.map((p) => (
          <div key={p.phase} className="rounded-2xl border border-ink/10 p-5 md:p-6 flex flex-col">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">
              Phase {p.phase}
            </p>
            <p className="mt-2 font-display text-base tracking-tightish text-ink leading-tight">
              {p.title}
            </p>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed">{p.summary}</p>
            <ul className="mt-4 pt-4 border-t border-ink/10 space-y-2 flex-1">
              {p.deliverables.map((d) => (
                <li key={d} className="text-xs text-ink/65 leading-relaxed">
                  · {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-ink/10">
        <h4 className="font-display text-2xl md:text-[1.5rem] leading-8 tracking-[-0.025em] text-ink">
          {productScope.flow.title}
        </h4>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
          System · Agent · Customer · Decision
        </p>

        <div className="mt-8 flex flex-col items-center w-full">
          {productScope.flow.sections.map((section) => (
            <div key={section.label} className="w-full flex flex-col items-center">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45 text-center">
                {section.label}
              </p>
              {section.steps.map((step, i) => (
                <FlowStep key={`${section.label}-${i}`} type={step.type} text={step.text} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
