"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";

function SectionBadge({ index, label }: { index: string; label: string }) {
  return (
    <p
      className="studio-label inline-flex items-center gap-2 rounded-full px-4 py-2"
      style={{ background: "var(--studio-accent-soft)" }}
    >
      <span className="font-mono" style={{ color: "var(--studio-accent)" }}>
        {index}
      </span>
      — {label}
    </p>
  );
}

export function AboutPage() {
  const { locale, t } = useLocale();
  const about = t.about;

  return (
    <article className="container-grid py-16 md:py-24">
      <section>
        <Link
          href="/"
          className="studio-chip inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-[var(--studio-accent)]"
        >
          {about.back}
        </Link>

        <div className="mt-10 md:mt-14">
          <SectionBadge index="00" label={about.label} />
          <h1 className="hero-title mt-6 md:mt-8">
            {locale === "zh" ? (
              <>
                岳靓。
                <br />
                一位<span className="studio-em">跨越边界</span>成长的高级设计师。
              </>
            ) : (
              <>
                Liang Yue.
                <br />
                A <span className="studio-em">senior designer</span> built across borders.
              </>
            )}
          </h1>
          <p className="lede-fill mt-8 text-ink/70">{about.tagline}</p>
        </div>
      </section>

      <Reveal>
        <section className="mt-16 md:mt-24">
          <SectionBadge index="01" label={about.background} />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-6 lg:col-span-7">
              {about.backgroundParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-lg md:text-xl text-ink/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <div className="studio-float rounded-3xl p-6 md:p-8">
                <dl className="space-y-5">
                  {(
                    [
                      [about.languages, about.languagesValue],
                      [about.openTo, about.openToValue],
                      [about.focusAreas, about.focusAreasValue]
                    ] as const
                  ).map(([label, value]) => (
                    <div key={label}>
                      <dt className="studio-label mb-1 !text-[0.65rem]">{label}</dt>
                      <dd className="text-ink">{value}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="studio-label mb-1 !text-[0.65rem]">{about.resume}</dt>
                    <dd>
                      <Link
                        href={about.resumeHref}
                        className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em]"
                        style={{ color: "var(--studio-accent)" }}
                      >
                        {about.resumeLink.replace("→", "").trim()}
                        <span
                          aria-hidden
                          className="inline-block transition-transform duration-300 ease-swiss group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-16 md:mt-24">
          <SectionBadge index="02" label={about.timeline} />
          <ol className="mt-8 space-y-4">
            {about.timelineItems.map((item) => (
              <li
                key={item.period}
                className="studio-chip grid grid-cols-1 gap-y-3 rounded-2xl p-6 md:grid-cols-12 md:gap-x-6 md:p-8"
              >
                <div className="studio-label !text-[0.65rem] md:col-span-3">{item.period}</div>
                <h3 className="text-xl font-medium text-ink md:col-span-4">{item.role}</h3>
                <p className="text-ink/70 leading-relaxed md:col-span-5">{item.note}</p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-16 md:mt-24">
          <SectionBadge index="03" label={about.education} />
          <div className="mt-8 space-y-4">
            {about.educationItems.map((item) => (
              <div key={item.degree} className="studio-chip rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-medium text-ink mb-2">{item.degree}</h3>
                <p className="text-ink/80">{item.school}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-ink/50">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-16 md:mt-24 pb-8">
          <SectionBadge index="04" label={about.skills} />
          <ul className="mt-8 flex flex-wrap gap-3">
            {about.skillItems.map((skill) => (
              <li
                key={skill}
                className="studio-chip rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-ink/70"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </article>
  );
}
