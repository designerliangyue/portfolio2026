import type { ReactNode } from "react";
import { marketValidation } from "@/content/ai-copilot-research";

const cardShell =
  "mt-8 border border-ink/10 bg-white rounded-[20px] p-8 md:p-12 lg:p-16 shadow-[0_1px_0_rgba(10,10,10,0.04)]";

function TextSection({
  heading,
  children
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-2.5">
      <h4 className="text-base font-medium leading-[22px] tracking-[-0.025em] text-ink">
        {heading}
      </h4>
      <p className="text-base font-normal leading-[22px] tracking-[-0.025em] text-ink/65">
        {children}
      </p>
    </section>
  );
}

export function MarketValidation() {
  const [lifepal, meta] = marketValidation.sections;

  return (
    <article className={cardShell}>
      <h3 className="font-display text-2xl md:text-[1.5rem] leading-8 tracking-[-0.025em] text-ink">
        <span aria-hidden className="mr-1.5">
          💡
        </span>
        {marketValidation.title}
      </h3>

      <div className="mt-6 md:mt-[26px] space-y-6 md:space-y-[26px]">
        <TextSection heading={lifepal.heading}>{lifepal.body}</TextSection>

        <TextSection heading={meta.heading}>
          {meta.bodyBeforeLink}
          <a
            href={meta.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5858ff] underline decoration-solid underline-offset-2 hover:text-[#4040e0] transition-colors"
          >
            {meta.link.label}
          </a>
          {meta.bodyAfterLink}
        </TextSection>
      </div>

      <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-ink/10">
        <h4 className="text-base font-medium leading-[22px] tracking-[-0.025em] text-ink">
          {marketValidation.benchmarksHeading}
        </h4>
        <p className="mt-2 text-sm text-ink/60 leading-relaxed">
          {marketValidation.benchmarksIntro}
        </p>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {marketValidation.benchmarks.map((b) => (
            <div
              key={b.name}
              className="rounded-2xl border border-ink/10 p-5 md:p-6"
            >
              <p className="font-display text-base tracking-tightish text-ink">{b.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{b.takeaway}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
