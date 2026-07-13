"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";
import { projectBySlug } from "@/content/projects";
import { ProjectCover } from "@/components/ProjectCover";
import { CaseStudyGallery } from "@/components/CaseStudyGallery";
import { galleryForSection } from "@/content/case-study-galleries";
import type { ProjectSlug } from "@/content/images";
import { ContributionRoles } from "@/components/case-study/ContributionRoles";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

function SectionBadge({ index }: { index: string }) {
  return (
    <span
      className="inline-block rounded-full px-3 py-1.5 font-mono text-xs tracking-[0.14em]"
      style={{ background: "var(--studio-accent-soft)", color: "var(--studio-accent)" }}
    >
      {index}
    </span>
  );
}

function DiagramSvg({ src, alt }: { src: string; alt: string }) {
  const { locale } = useLocale();
  const localizedSrc = locale === "zh" ? src.replace(/\.svg$/, ".zh.svg") : src;
  return (
    <figure className="mt-12">
      <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0">
        {/* On mobile the diagram keeps a legible min width and scrolls horizontally */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={localizedSrc} alt={alt} className="w-full min-w-[1040px] md:min-w-0" />
      </div>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40 md:hidden">
        {locale === "zh" ? "滑动查看 →" : "Scroll to read →"}
      </figcaption>
    </figure>
  );
}

function CaseStudyInteractive({
  slug,
  kicker
}: {
  slug: string;
  kicker: string;
}) {
  if (slug !== "ai-copilot") return null;

  switch (kicker) {
    case "Contribution":
      return <ContributionRoles />;
    case "Research":
      return (
        <>
          <DiagramSvg
            src="/images/ai-copilot/why-we-are-doing-this.svg"
            alt="Why are we doing this — chat-first market reality, the WhatsApp Flow opportunity, and the unstructured vs. structured interaction modes."
          />
          <DiagramSvg
            src="/images/ai-copilot/market-validation.svg"
            alt="Market validation — Lifepal and Meta WhatsApp Flows precedents, plus Redbus, JioMart, and HDFC Bank industry benchmarks."
          />
        </>
      );
    case "Product":
      return (
        <DiagramSvg
          src="/images/ai-copilot/product-scope.svg"
          alt="Phases breakdown across four phases, and the user flow from lead acquisition to policy issued."
        />
      );
    case "System design":
      return (
        <DiagramSvg
          src="/images/ai-copilot/architecture.svg"
          alt="Four-layer system architecture — omni-channel integration, hybrid orchestration & runtime, smart MCP routing, and MCP servers."
        />
      );
    default:
      return null;
  }
}

function sectionGalleryKey(kicker: string, kickerKey?: string) {
  return kickerKey ?? kicker;
}

export function CaseStudyView({ slug }: { slug: string }) {
  const { locale, t } = useLocale();
  const project = projectBySlug(slug, locale);
  if (!project) notFound();

  const nextProject = project.next ? projectBySlug(project.next, locale) : null;
  const projectSlug = project.slug as ProjectSlug;
  const hasCrossCultural = (project.crossCultural?.length ?? 0) > 0;
  const sectionStartIndex = hasCrossCultural ? 3 : 2;
  const cs = t.caseStudy;

  return (
    <article>
      <section className="container-grid pt-12 md:pt-20 pb-16 md:pb-24">
        <Link
          href="/#work"
          className="studio-chip inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-[var(--studio-accent)]"
        >
          {cs.allWork}
        </Link>

        <div className="mt-10 md:mt-14">
          <p
            className="studio-label inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: "var(--studio-accent-soft)" }}
          >
            <span
              className="font-mono"
              style={{ color: "var(--studio-accent)" }}
            >
              {project.index}
            </span>
            — {project.industry}
          </p>
          <h1 className="display-1 mt-6">{project.title}</h1>
          <p className="display-3 text-ink/60 mt-6">{project.subtitle}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 md:mt-12">
          {(
            [
              [cs.period, project.period],
              [cs.role, project.role],
              [cs.market, project.market]
            ] as const
          ).map(([label, value]) => (
            <p key={label} className="studio-chip inline-flex items-baseline gap-2 rounded-full px-4 py-2">
              <span className="studio-label !text-[0.65rem]">{label}</span>
              <span className="text-sm font-medium text-ink">{value}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="container-grid pb-16 md:pb-24">
        <ProjectCover project={project} variant="hero" className="rounded-3xl" />
      </section>

      <section className="container-grid py-16 md:py-24">
        <div className="swiss-grid">
          <div className="case-study-index">
            <SectionBadge index="01" />
          </div>
          <div className="case-study-main">
            <p className="label mb-8">{cs.overview}</p>
            <p className="display-3 text-ink">{project.hero}</p>

            <div className="mt-16 case-study-split">
              <div className="studio-chip rounded-2xl p-6 md:p-8">
                <p className="label mb-4">{cs.problem}</p>
                <p className="text-base md:text-lg text-ink/80 leading-relaxed">{project.problem}</p>
              </div>
              <div className="studio-chip rounded-2xl p-6 md:p-8">
                <p className="label mb-4">{cs.approach}</p>
                <p className="text-base md:text-lg text-ink/80 leading-relaxed">{project.approach}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {hasCrossCultural ? (
        <section className="container-grid py-16 md:py-24 border-t border-ink/10">
          <div className="swiss-grid">
            <div className="case-study-index">
              <SectionBadge index="02" />
            </div>
            <div className="case-study-main">
              <p className="label mb-8">{cs.crossCultural}</p>
              <div className="case-study-split">
                {project.crossCultural!.map((cc) => (
                  <div key={cc.heading} className="studio-chip rounded-2xl p-6 md:p-8">
                    <h3 className="display-3 text-xl md:text-2xl mb-4">{cc.heading}</h3>
                    <p className="text-ink/80 leading-relaxed text-base md:text-lg">{cc.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {project.sections.map((section, i) => {
        const galleryKey = sectionGalleryKey(section.kicker, section.kickerKey);
        const galleryBlocks = galleryForSection(projectSlug, galleryKey);
        const hasAside = Boolean(section.bullets?.length);
        const bodyParagraph = (p: string, idx: number) => (
          <p key={idx} className="text-base md:text-lg text-ink/80 leading-relaxed">
            {p}
          </p>
        );

        return (
          <Reveal key={`${galleryKey}-${i}`}>
          <section className="container-grid py-16 md:py-24 border-t border-ink/10">
            <div className="swiss-grid">
              <div className="case-study-index">
                <SectionBadge index={String(i + sectionStartIndex).padStart(2, "0")} />
              </div>
              <div className="case-study-main">
                <p className="label mb-8">{section.kicker}</p>
                <h2 className="display-3 mb-10">{section.title}</h2>

                {section.stats?.length ? (
                  <dl className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {section.stats.map((s) => (
                      <div key={s.label} className="studio-chip rounded-2xl p-5">
                        <dt className="display-3 leading-none" style={{ color: "var(--studio-accent)" }}>
                          <CountUp value={s.value} />
                        </dt>
                        <dd className="mt-3 text-sm text-ink/60 leading-snug">{s.label}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {hasAside ? (
                  <div className="swiss-grid">
                    <div className="col-span-12 md:col-span-7 space-y-6">
                      {section.body.map(bodyParagraph)}
                    </div>
                    <div className="col-span-12 md:col-start-9 md:col-span-4 mt-8 md:mt-0 space-y-4">
                      {section.bullets!.map((b) => (
                        <div key={b.heading} className="studio-chip rounded-2xl p-5">
                          <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-ink mb-2">
                            {b.heading}
                          </h4>
                          <p className="text-sm text-ink/70 leading-relaxed">{b.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : section.body.length >= 2 ? (
                  <div className="case-study-split md:items-start">
                    {section.body.map(bodyParagraph)}
                  </div>
                ) : (
                  <div className="space-y-6">{section.body.map(bodyParagraph)}</div>
                )}

                <CaseStudyInteractive slug={slug} kicker={galleryKey} />

                <CaseStudyGallery
                  slug={projectSlug}
                  blocks={galleryBlocks}
                  projectTitle={project.title}
                />
              </div>
            </div>
          </section>
          </Reveal>
        );
      })}

      <section className="container-grid py-16 md:py-24 border-t border-ink/10">
        <div className="swiss-grid">
          <div className="case-study-index">
            <SectionBadge index={String(sectionStartIndex + project.sections.length).padStart(2, "0")} />
          </div>
          <div className="case-study-main">
            <p className="label mb-8">{cs.outcome}</p>
            <p className="display-3 text-ink">{project.outcome}</p>
          </div>
        </div>
      </section>

      {nextProject ? (
        <section className="container-grid pb-16 md:pb-24">
          <Link
            href={`/work/${nextProject.slug}`}
            className="studio-project-card group block rounded-3xl p-8 md:p-12"
          >
            <p className="label mb-6">{cs.nextCase}</p>
            <h2 className="display-2 group-hover:translate-x-2 transition-transform duration-500 ease-swiss">
              {nextProject.index} · {nextProject.title}{" "}
              <span aria-hidden style={{ color: "var(--studio-accent)" }}>
                →
              </span>
            </h2>
            <p className="text-ink/60 mt-4 md:mt-5">{nextProject.subtitle}</p>
          </Link>
        </section>
      ) : (
        <section className="container-grid pb-16 md:pb-24">
          <Link
            href="/#work"
            className="studio-project-card group block rounded-3xl p-8 md:p-12"
          >
            <p className="label mb-6">{cs.endOfWork}</p>
            <h2 className="display-2 group-hover:translate-x-2 transition-transform duration-500 ease-swiss">
              {cs.backToWork}
            </h2>
          </Link>
        </section>
      )}
    </article>
  );
}
