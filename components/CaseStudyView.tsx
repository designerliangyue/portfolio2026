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

function DiagramSvg({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="mt-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full" />
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
          className="font-mono text-xs uppercase tracking-[0.18em] link-underline"
        >
          {cs.allWork}
        </Link>

        <div className="mt-10 swiss-grid">
          <div className="case-study-index font-mono text-sm uppercase tracking-[0.18em] text-ink/50">
            {project.index}
          </div>
          <div className="case-study-main">
            <p className="label mb-6">{project.industry}</p>
            <h1 className="display-1">{project.title}</h1>
            <p className="display-3 text-ink/60 mt-6">{project.subtitle}</p>
          </div>
        </div>

        <div className="mt-16 swiss-grid">
          <div className="case-study-main">
            <dl className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 border-t border-ink/15 pt-8">
              <div>
                <dt className="label mb-2">{cs.period}</dt>
                <dd className="text-sm">{project.period}</dd>
              </div>
              <div>
                <dt className="label mb-2">{cs.role}</dt>
                <dd className="text-sm">{project.role}</dd>
              </div>
              <div>
                <dt className="label mb-2">{cs.market}</dt>
                <dd className="text-sm">{project.market}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="container-grid pb-16 md:pb-24">
        <div className="swiss-grid">
          <div className="case-study-main">
            <ProjectCover project={project} variant="hero" />
          </div>
        </div>
      </section>

      <section className="container-grid py-16 md:py-24">
        <div className="swiss-grid">
          <div className="case-study-index font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
            01
          </div>
          <div className="case-study-main">
            <p className="label mb-8">{cs.overview}</p>
            <p className="display-3 text-ink">{project.hero}</p>

            <div className="mt-16 case-study-split">
              <div>
                <p className="label mb-4">{cs.problem}</p>
                <p className="text-base md:text-lg text-ink/80 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <p className="label mb-4">{cs.approach}</p>
                <p className="text-base md:text-lg text-ink/80 leading-relaxed">{project.approach}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {hasCrossCultural ? (
        <section className="container-grid py-16 md:py-24 border-t border-ink/15">
          <div className="swiss-grid">
            <div className="case-study-index font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
              02
            </div>
            <div className="case-study-main">
              <p className="label mb-8">{cs.crossCultural}</p>
              <div className="case-study-split">
                {project.crossCultural!.map((cc) => (
                  <div key={cc.heading} className="border-t border-ink/15 pt-6">
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
          <section
            key={`${galleryKey}-${i}`}
            className="container-grid py-16 md:py-24 border-t border-ink/15"
          >
            <div className="swiss-grid">
              <div className="case-study-index font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
                {String(i + sectionStartIndex).padStart(2, "0")}
              </div>
              <div className="case-study-main">
                <p className="label mb-8">{section.kicker}</p>
                <h2 className="display-3 mb-10">{section.title}</h2>

                {section.stats?.length ? (
                  <dl className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 border-t border-ink/15 pt-8">
                    {section.stats.map((s) => (
                      <div key={s.label}>
                        <dt className="display-3 text-ink leading-none">{s.value}</dt>
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
                    <div className="col-span-12 md:col-start-9 md:col-span-4 mt-8 md:mt-0 space-y-8">
                      {section.bullets!.map((b) => (
                        <div key={b.heading} className="border-t border-ink/15 pt-4">
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
        );
      })}

      <section className="container-grid py-16 md:py-24 border-t border-ink/15">
        <div className="swiss-grid">
          <div className="case-study-index font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
            {String(sectionStartIndex + project.sections.length).padStart(2, "0")}
          </div>
          <div className="case-study-main">
            <p className="label mb-8">{cs.outcome}</p>
            <p className="display-3 text-ink">{project.outcome}</p>
          </div>
        </div>
      </section>

      {nextProject ? (
        <section className="container-grid py-16 md:py-24 border-t border-ink/15">
          <div className="swiss-grid">
            <div className="case-study-main">
              <Link href={`/work/${nextProject.slug}`} className="group block">
                <p className="label mb-6">{cs.nextCase}</p>
                <div className="flex items-end justify-between gap-6 flex-wrap">
                  <h2 className="display-2 group-hover:translate-x-2 transition-transform duration-500 ease-swiss">
                    {nextProject.index} · {nextProject.title} →
                  </h2>
                  <p className="text-ink/60">{nextProject.subtitle}</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="container-grid py-16 md:py-24 border-t border-ink/15">
          <div className="swiss-grid">
            <div className="case-study-main">
              <Link href="/#work" className="group block">
                <p className="label mb-6">{cs.endOfWork}</p>
                <h2 className="display-2 group-hover:translate-x-2 transition-transform duration-500 ease-swiss">
                  {cs.backToWork}
                </h2>
              </Link>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
