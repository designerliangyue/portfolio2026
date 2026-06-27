"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

export function AboutPage() {
  const { locale, t } = useLocale();
  const about = t.about;

  return (
    <article className="container-grid py-16 md:py-28">
      <section>
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.18em] link-underline"
        >
          {about.back}
        </Link>

        <div className="mt-10 swiss-grid">
          <div className="col-span-12 md:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
            00
          </div>
          <div className="col-span-12 md:col-span-11 space-y-8">
            <p className="label">{about.label}</p>
            <h1 className="display-1 display-1-hero">
              {locale === "zh" ? (
                <>
                  <span className="zh-highlight">岳靓</span>
                  <br />
                  <span className="zh-muted">跨越边界成长的高级设计师</span>
                </>
              ) : (
                <>
                  Liang Yue.
                  <br />
                  <span className="serif-em">A senior designer</span>
                  <br />
                  built across borders.
                </>
              )}
            </h1>
            <p className="display-3 text-ink/70 max-w-4xl font-normal">{about.tagline}</p>
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-28">
        <div className="swiss-grid">
          <div className="col-span-12 md:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
            01
          </div>
          <div className="col-span-12 md:col-span-11">
            <p className="label mb-8">{about.background}</p>
            <div className="swiss-grid">
              <div className="col-span-12 md:col-span-7 space-y-6">
                {about.backgroundParagraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-lg md:text-xl text-ink/80 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="col-span-12 md:col-start-9 md:col-span-4 mt-10 md:mt-0 space-y-6">
                <dl className="space-y-5">
                  <div>
                    <dt className="label mb-1">{about.languages}</dt>
                    <dd>{about.languagesValue}</dd>
                  </div>
                  <div>
                    <dt className="label mb-1">{about.openTo}</dt>
                    <dd>{about.openToValue}</dd>
                  </div>
                  <div>
                    <dt className="label mb-1">{about.focusAreas}</dt>
                    <dd>{about.focusAreasValue}</dd>
                  </div>
                  <div>
                    <dt className="label mb-1">{about.resume}</dt>
                    <dd>
                      <a
                        className="link-underline"
                        href={about.resumeHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {about.resumeLink}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-28">
        <div className="swiss-grid">
          <div className="col-span-12 md:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
            02
          </div>
          <div className="col-span-12 md:col-span-11">
            <p className="label mb-8">{about.timeline}</p>
            <ol className="space-y-6">
              {about.timelineItems.map((item) => (
                <li key={item.period} className="grid grid-cols-12 gap-x-6 divider-top pt-6">
                  <div className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
                    {item.period}
                  </div>
                  <div className="col-span-12 md:col-span-4 font-display tracking-tighter2 text-2xl">
                    {item.role}
                  </div>
                  <p className="col-span-12 md:col-span-5 text-ink/70 leading-relaxed">
                    {item.note}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-28">
        <div className="swiss-grid">
          <div className="col-span-12 md:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
            03
          </div>
          <div className="col-span-12 md:col-span-11">
            <p className="label mb-8">{about.education}</p>
            <div className="space-y-6">
              {about.educationItems.map((item) => (
                <div key={item.degree} className="divider-top pt-6">
                  <h3 className="display-3 text-2xl mb-2">{item.degree}</h3>
                  <p className="text-ink/80">{item.school}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-ink/50">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-28 pb-8">
        <div className="swiss-grid">
          <div className="col-span-12 md:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
            04
          </div>
          <div className="col-span-12 md:col-span-11">
            <p className="label mb-8">{about.skills}</p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {about.skillItems.map((skill) => (
                <li
                  key={skill}
                  className="border-t border-ink/15 pt-4 font-mono text-xs uppercase tracking-[0.16em] text-ink/70"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
