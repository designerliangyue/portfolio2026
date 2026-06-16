"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { getProjects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Marquee } from "@/components/Marquee";

export function HomePage() {
  const { locale, t } = useLocale();
  const projects = getProjects(locale);

  return (
    <>
      <section className="container-grid pt-16 pb-24 md:pt-28 md:pb-40">
        <div className="swiss-grid">
          <div className="col-span-12 md:col-span-1">
            <p className="label">001</p>
          </div>
          <div className="col-span-12 md:col-span-11">
            <p className="label mb-8">{t.home.heroLabel}</p>

            <h1 className="display-1 display-1-hero tracking-tighter2">
              {locale === "zh" ? (
                <>
                  <span className="zh-muted">在文化与技术的</span>
                  <br />
                  <span className="zh-muted">交界处，</span>
                  <br />
                  <span className="zh-muted">设计</span>
                  <span className="zh-highlight">可靠的产品</span>
                </>
              ) : (
                <>
                  Designing reliable
                  <br />
                  products at the edge
                  <br />
                  of <span className="serif-em">culture</span> &amp;{" "}
                  <span className="serif-em">technology</span>.
                </>
              )}
            </h1>

            <div className="mt-12 md:mt-16 swiss-grid">
              <div className="col-span-12 md:col-span-7">
                <p className="lede">{t.home.lede}</p>
              </div>
              <div className="col-span-12 md:col-start-9 md:col-span-4 mt-8 md:mt-2">
                <dl className="grid grid-cols-2 gap-y-6 gap-x-6">
                  <div>
                    <dt className="label mb-1">{t.home.based}</dt>
                    <dd>{t.home.basedValue}</dd>
                  </div>
                  <div>
                    <dt className="label mb-1">{t.home.focus}</dt>
                    <dd>{t.home.focusValue}</dd>
                  </div>
                  <div>
                    <dt className="label mb-1">{t.home.languages}</dt>
                    <dd>{t.home.languagesValue}</dd>
                  </div>
                  <div>
                    <dt className="label mb-1">{t.home.status}</dt>
                    <dd>{t.home.statusValue}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={[...t.marquee]} />

      <section id="work" className="container-grid pt-24 md:pt-32 pb-24">
        <div className="swiss-grid mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-1">
            <p className="label">002</p>
          </div>
          <div className="col-span-12 md:col-span-11 space-y-6">
            <p className="label">{t.home.workLabel}</p>
            <h2 className={locale === "zh" ? "section-title section-title-zh" : "section-title"}>
              {locale === "zh" ? (
                <>
                  <span className="zh-highlight">跨文化规模</span>
                  <span className="zh-slash">/</span>
                  <span className="zh-highlight">战略前瞻</span>
                  <span className="zh-slash">/</span>
                  <span className="zh-highlight">企业级深度</span>
                </>
              ) : (
                <>
                  Cross-cultural scale.{" "}
                  <span className="serif-em">Strategic foresight.</span> Enterprise depth.
                </>
              )}
            </h2>
            <p className="lede-fill">{t.home.workLede}</p>
          </div>
        </div>

        <div>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <div className="divider-top" />
        </div>
      </section>

      <section className="container-grid pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="swiss-grid">
          <div className="col-span-12 md:col-span-1">
            <p className="label">003</p>
          </div>
          <div className="col-span-12 md:col-span-11 space-y-6">
            <p className="label">{t.home.aboutLabel}</p>
            <h2 className={locale === "zh" ? "section-title section-title-zh" : "section-title"}>
              {locale === "zh" ? (
                <>
                  <span className="zh-muted">一位以结果为导向的设计师——在可靠性与</span>
                  <span className="zh-highlight">创新</span>
                  <span className="zh-muted">之间取得平衡，扎根于</span>
                  <span className="zh-highlight">用户研究</span>
                  <span className="zh-muted">，并在</span>
                  <span className="zh-highlight">真实约束</span>
                  <span className="zh-muted">中不断打磨。</span>
                </>
              ) : (
                <>
                  A results-focused designer who merges reliability with{" "}
                  <span className="serif-em">innovation</span> — grounded in{" "}
                  <span className="serif-em">user research</span>, sharpened by{" "}
                  <span className="serif-em">real-world constraints</span>.
                </>
              )}
            </h2>
            <p className="lede-fill">{t.home.aboutLede}</p>
            <Link
              href="/about"
              className="inline-block font-mono text-xs uppercase tracking-[0.18em] link-underline"
            >
              {t.home.aboutLink}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
