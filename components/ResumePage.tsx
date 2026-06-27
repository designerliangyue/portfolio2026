"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { getResume } from "@/content/resume";

const EMAIL = "designer.liangyue@gmail.com";
const LINKEDIN = "linkedin.com/in/liang-y";

export function ResumePage() {
  const { locale, t } = useLocale();
  const r = t.resume;
  const cv = getResume(locale);

  return (
    <article className="container-grid py-12 md:py-20">
      <div className="flex items-center justify-between gap-4 no-print">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.18em] link-underline">
          {r.back}
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="font-mono text-xs uppercase tracking-[0.18em] border border-ink/20 rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
        >
          {r.print}
        </button>
      </div>

      {/* Header */}
      <header className="mt-12 md:mt-16 border-b border-ink/15 pb-10">
        <h1 className="display-2">{locale === "zh" ? "岳靓 · Liang Yue" : "Liang Yue"}</h1>
        <p className="display-3 text-ink/60 mt-3" style={{ wordBreak: "normal" }}>
          {cv.title}
        </p>

        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
          <div className="min-w-0">
            <dt className="label mb-1">{r.contact}</dt>
            <dd className="text-sm">
              <a
                className="underline decoration-ink/25 underline-offset-4 break-all transition-colors hover:decoration-ink"
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </a>
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="label mb-1">LinkedIn</dt>
            <dd className="text-sm">
              <a
                className="underline decoration-ink/25 underline-offset-4 break-all transition-colors hover:decoration-ink"
                href={`https://www.${LINKEDIN}`}
                target="_blank"
                rel="noreferrer"
              >
                {LINKEDIN}
              </a>
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="label mb-1">{t.about.languages}</dt>
            <dd className="text-sm">{t.about.languagesValue}</dd>
          </div>
          <div className="min-w-0">
            <dt className="label mb-1">{t.about.openTo}</dt>
            <dd className="text-sm">{r.availability}</dd>
          </div>
        </dl>
      </header>

      {/* Summary */}
      <section className="mt-12 md:mt-16">
        <h2 className="label mb-6">{r.summaryHeading}</h2>
        <p className="text-base md:text-lg text-ink/80 leading-relaxed">{cv.summary}</p>
      </section>

      {/* Core skills */}
      <section className="mt-12 md:mt-16">
        <h2 className="label mb-8">{r.coreSkills}</h2>
        <dl className="space-y-6">
          {cv.coreSkills.map((s) => (
            <div key={s.group} className="grid grid-cols-12 gap-x-6 border-t border-ink/15 pt-5">
              <dt className="col-span-12 md:col-span-4 font-display tracking-tightish text-lg">
                {s.group}
              </dt>
              <dd className="col-span-12 md:col-span-8 text-ink/70 leading-relaxed">{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Experience */}
      <section className="mt-12 md:mt-16">
        <h2 className="label mb-8">{r.experience}</h2>
        <ol className="space-y-10">
          {cv.experience.map((job) => (
            <li key={job.company + job.period} className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-ink/15 pt-6">
              <div className="col-span-12 md:col-span-4">
                <p className="font-display tracking-tightish text-xl">{job.role}</p>
                <p className="mt-1 text-ink/80">{job.company}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                  {job.period}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
                  {job.location}
                </p>
              </div>
              <ul className="col-span-12 md:col-span-8 space-y-3">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm md:text-base text-ink/75 leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="mt-12 md:mt-16 pb-8">
        <h2 className="label mb-8">{r.education}</h2>
        {cv.education.map((e) => (
          <div key={e.degree} className="grid grid-cols-12 gap-x-6 gap-y-2 border-t border-ink/15 pt-6">
            <div className="col-span-12 md:col-span-4">
              <p className="font-display tracking-tightish text-xl">{e.degree}</p>
              <p className="mt-1 text-ink/80">{e.school}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                {e.period}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
                {e.location}
              </p>
            </div>
            <p className="col-span-12 md:col-span-8 text-ink/70 leading-relaxed">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 mr-2">
                {r.focus}
              </span>
              {e.focus}
            </p>
          </div>
        ))}
      </section>
    </article>
  );
}
