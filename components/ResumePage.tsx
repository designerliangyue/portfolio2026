"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { getResume } from "@/content/resume";
import { Reveal } from "@/components/Reveal";

const EMAIL = "designer.liangyue@gmail.com";
const LINKEDIN = "linkedin.com/in/liang-y";

function SectionBadge({ label }: { label: string }) {
  return (
    <p
      className="studio-label mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2"
      style={{ background: "var(--studio-accent-soft)" }}
    >
      <span
        className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ background: "var(--studio-accent)" }}
      />
      {label}
    </p>
  );
}

export function ResumePage() {
  const { locale, t } = useLocale();
  const r = t.resume;
  const cv = getResume(locale);

  return (
    <article className="container-grid py-12 md:py-20">
      <div className="flex items-center justify-between gap-4 no-print">
        <Link
          href="/"
          className="studio-chip inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-[var(--studio-accent)]"
        >
          {r.back}
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
          style={{ background: "var(--studio-accent)", color: "var(--studio-card)" }}
        >
          {r.print}
        </button>
      </div>

      {/* Header */}
      <header className="mt-12 md:mt-16">
        <h1 className="display-2">{locale === "zh" ? "岳靓" : "Liang Yue"}</h1>
        <p className="display-3 text-ink/60 mt-3" style={{ wordBreak: "normal" }}>
          {cv.title}
        </p>

        <div className="resume-contact mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full px-4 py-2 font-mono text-xs tracking-[0.08em] transition-opacity hover:opacity-90"
            style={{ background: "var(--studio-accent)", color: "var(--studio-card)" }}
          >
            {EMAIL}
          </a>
          <a
            href={`https://www.${LINKEDIN}`}
            target="_blank"
            rel="noreferrer"
            className="studio-chip rounded-full px-4 py-2 font-mono text-xs tracking-[0.08em] text-ink/80 transition-colors hover:text-[var(--studio-accent)]"
          >
            {LINKEDIN} ↗
          </a>
          <p className="studio-chip inline-flex items-baseline gap-2 rounded-full px-4 py-2">
            <span className="studio-label !text-[0.6rem]">{t.about.languages}</span>
            <span className="text-sm text-ink">{t.about.languagesValue}</span>
          </p>
          <p className="studio-chip inline-flex items-baseline gap-2 rounded-full px-4 py-2">
            <span className="studio-label !text-[0.6rem]">{t.about.openTo}</span>
            <span className="text-sm text-ink">{r.availability}</span>
          </p>
        </div>
      </header>

      {/* Summary */}
      <Reveal>
        <section className="mt-12 md:mt-16">
          <SectionBadge label={r.summaryHeading} />
          <p className="text-base md:text-lg text-ink/80 leading-relaxed">{cv.summary}</p>
        </section>
      </Reveal>

      {/* Core skills */}
      <Reveal>
        <section className="mt-12 md:mt-16">
          <SectionBadge label={r.coreSkills} />
          <dl className="space-y-3">
            {cv.coreSkills.map((s) => (
              <div
                key={s.group}
                className="studio-chip grid grid-cols-1 gap-y-2 rounded-2xl p-5 md:grid-cols-12 md:gap-x-6 md:p-6"
              >
                <dt className="text-lg font-medium text-ink md:col-span-4">{s.group}</dt>
                <dd className="text-ink/70 leading-relaxed md:col-span-8">{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Reveal>

      {/* Experience */}
      <Reveal>
        <section className="resume-experience mt-12 md:mt-16">
          <SectionBadge label={r.experience} />
          <ol className="space-y-4">
            {cv.experience.map((job) => (
              <li
                key={job.company + job.period}
                className="studio-chip grid grid-cols-1 gap-y-4 rounded-2xl p-6 md:grid-cols-12 md:gap-x-6 md:p-8"
              >
                <div className="md:col-span-4">
                  <p className="text-xl font-medium text-ink">{job.role}</p>
                  <p className="mt-1 text-ink/80">{job.company}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                    {job.period}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
                    {job.location}
                  </p>
                </div>
                <ul className="space-y-3 md:col-span-8">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm md:text-base text-ink/75 leading-relaxed">
                      <span className="mt-1.5 shrink-0" style={{ color: "var(--studio-accent)" }}>
                        ·
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      {/* Education */}
      <Reveal>
        <section className="mt-12 md:mt-16 pb-8">
          <SectionBadge label={r.education} />
          {cv.education.map((e) => (
            <div
              key={e.degree}
              className="studio-chip grid grid-cols-1 gap-y-2 rounded-2xl p-6 md:grid-cols-12 md:gap-x-6 md:p-8"
            >
              <div className="md:col-span-4">
                <p className="text-xl font-medium text-ink">{e.degree}</p>
                <p className="mt-1 text-ink/80">{e.school}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                  {e.period}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
                  {e.location}
                </p>
              </div>
              <p className="text-ink/70 leading-relaxed md:col-span-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 mr-2">
                  {r.focus}
                </span>
                {e.focus}
              </p>
            </div>
          ))}
        </section>
      </Reveal>
    </article>
  );
}
