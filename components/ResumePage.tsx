"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

const EMAIL = "designer.liangyue@gmail.com";
const LINKEDIN = "linkedin.com/in/liang-y";

export function ResumePage() {
  const { t } = useLocale();
  const r = t.resume;
  const about = t.about;

  return (
    <article className="container-grid py-12 md:py-20">
      <div className="flex items-center justify-between gap-4 no-print">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.18em] link-underline"
        >
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
        <h1 className="display-2">{t.name === "岳靓" ? "岳靓 · Liang Yue" : "Liang Yue"}</h1>
        <p className="display-3 text-ink/60 mt-3">{r.role}</p>
        <p className="lede mt-6 max-w-3xl">{r.summary}</p>

        <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
          <div>
            <dt className="label mb-1">{r.contact}</dt>
            <dd className="text-sm">
              <a className="link-underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </dd>
          </div>
          <div>
            <dt className="label mb-1">LinkedIn</dt>
            <dd className="text-sm">
              <a
                className="link-underline"
                href={`https://www.${LINKEDIN}`}
                target="_blank"
                rel="noreferrer"
              >
                {LINKEDIN}
              </a>
            </dd>
          </div>
          <div>
            <dt className="label mb-1">{about.languages}</dt>
            <dd className="text-sm">{about.languagesValue}</dd>
          </div>
          <div>
            <dt className="label mb-1">{about.openTo}</dt>
            <dd className="text-sm">{r.location}</dd>
          </div>
        </dl>
      </header>

      {/* Experience */}
      <section className="mt-12 md:mt-16">
        <h2 className="label mb-8">{r.experience}</h2>
        <ol className="space-y-6">
          {about.timelineItems.map((item) => (
            <li key={item.period + item.role} className="grid grid-cols-12 gap-x-6 border-t border-ink/15 pt-6">
              <div className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
                {item.period}
              </div>
              <div className="col-span-12 md:col-span-4 font-display tracking-tightish text-xl">
                {item.role}
              </div>
              <p className="col-span-12 md:col-span-5 text-ink/70 leading-relaxed">{item.note}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="mt-12 md:mt-16">
        <h2 className="label mb-8">{r.education}</h2>
        <div className="space-y-6">
          {about.educationItems.map((item) => (
            <div key={item.degree} className="border-t border-ink/15 pt-6">
              <h3 className="font-display tracking-tightish text-xl mb-1">{item.degree}</h3>
              <p className="text-ink/80">{item.school}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-ink/50">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-12 md:mt-16 pb-8">
        <h2 className="label mb-8">{r.skills}</h2>
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
      </section>
    </article>
  );
}
