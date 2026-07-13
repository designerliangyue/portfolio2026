"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { getEmployeeBenefits } from "@/content/employee-benefits";
import { Reveal } from "@/components/Reveal";

function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        width={1800}
        height={1200}
        sizes="(max-width: 1024px) 100vw, 1100px"
        className="h-auto w-full"
      />
    </div>
  );
}

export function EmployeeBenefitsView() {
  const { locale } = useLocale();
  const c = getEmployeeBenefits(locale);

  return (
    <article className="container-grid py-12 md:py-20">
      <Link
        href="/#work"
        className="studio-chip inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-[var(--studio-accent)]"
      >
        {c.back}
      </Link>

      {/* Header */}
      <header className="mt-10 md:mt-14">
        <p
          className="studio-label inline-flex items-center gap-2 rounded-full px-4 py-2"
          style={{ background: "var(--studio-accent-soft)" }}
        >
          <span
            className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: "var(--studio-green)" }}
          />
          {c.badge}
        </p>
        <h1 className="display-1 mt-6">{c.title}</h1>
        <p className="display-3 text-ink/60 mt-6">{c.subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {c.meta.map((m) => (
            <p key={m.label} className="studio-chip inline-flex items-baseline gap-2 rounded-full px-4 py-2">
              <span className="studio-label !text-[0.65rem]">{m.label}</span>
              <span className="text-sm font-medium text-ink">{m.value}</span>
            </p>
          ))}
        </div>
      </header>

      <div className="mt-10 overflow-hidden rounded-3xl">
        <Image
          src={c.coverImage}
          alt={c.title}
          width={1600}
          height={820}
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="h-auto w-full"
          priority
        />
      </div>

      {/* Overview */}
      <Reveal>
        <section className="mt-16 md:mt-24">
          <p className="label mb-8">{c.overviewLabel}</p>
          <p className="display-3 text-ink">{c.overview}</p>

          <Shot src={c.overviewImage} alt={`${c.title} — platform flow`} />

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="studio-chip rounded-2xl p-6">
              <p className="studio-label mb-3 !text-[0.65rem]">{c.roleLabel}</p>
              <ul className="space-y-1 text-ink">
                {c.roleItems.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="studio-chip rounded-2xl p-6 md:col-span-2">
              <p className="studio-label mb-3 !text-[0.65rem]">{c.respLabel}</p>
              <ul className="space-y-2">
                {c.respItems.map((it) => (
                  <li key={it} className="flex gap-3 text-ink/75 leading-relaxed">
                    <span className="mt-1.5 shrink-0" style={{ color: "var(--studio-accent)" }}>
                      ·
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Understand the users */}
      <Reveal>
        <section className="mt-16 md:mt-24 border-t border-ink/10 pt-16 md:pt-24">
          <p className="label mb-8">{c.usersLabel}</p>
          <h2 className="display-3 mb-6">{c.usersTitle}</h2>
          <p className="lede-fill">{c.usersIntro}</p>
          <Shot src={c.pillarsImage} alt={c.usersTitle} />
        </section>
      </Reveal>

      {/* Design solutions */}
      <Reveal>
        <section className="mt-16 md:mt-24 border-t border-ink/10 pt-16 md:pt-24">
          <p className="label mb-8">{c.solutionsLabel}</p>
          <h2 className="display-3 mb-10">{c.solutionsTitle}</h2>

          <div className="studio-chip rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-medium text-ink">{c.featureTitle}</h3>
            <p className="mt-2 text-ink/70 leading-relaxed">{c.featureNote}</p>
            <Shot src={c.featureImage} alt={c.featureTitle} />
          </div>

          <div className="mt-6 space-y-6">
            {c.panels.map((panel) => (
              <div key={panel.title} className="studio-chip rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-medium text-ink">{panel.title}</h3>
                <ul className="mt-3 space-y-2">
                  {panel.points.map((p) => (
                    <li key={p} className="flex gap-3 text-ink/75 leading-relaxed">
                      <span className="mt-1.5 shrink-0" style={{ color: "var(--studio-accent)" }}>
                        ·
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Shot src={panel.image} alt={panel.title} />
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Closing */}
      <Reveal>
        <section className="mt-16 md:mt-24 border-t border-ink/10 pt-16 md:pt-24">
          <p className="label mb-8">{c.closingLabel}</p>
          <p className="display-3 text-ink">{c.closingText}</p>
        </section>
      </Reveal>

      <section className="mt-16 md:mt-24">
        <Link href="/#work" className="studio-project-card group block rounded-3xl p-8 md:p-12">
          <h2 className="display-2 group-hover:translate-x-2 transition-transform duration-500 ease-swiss">
            {c.backToWork}
          </h2>
        </Link>
      </section>
    </article>
  );
}
