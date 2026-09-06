"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { getEmployeeBenefits } from "@/content/employee-benefits";
import { Reveal } from "@/components/Reveal";
import { CaseStudyNavigator } from "@/components/CaseStudyNavigator";

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
  const navItems = [
    { href: "#overview", label: c.overviewLabel },
    { href: "#evidence-boundary", label: c.evidenceLabel },
    { href: "#users", label: c.usersLabel },
    { href: "#solutions", label: c.solutionsLabel },
    { href: "#outcome", label: c.closingLabel }
  ];

  return (
    <article className="container-grid py-12 md:py-20">
      <CaseStudyNavigator label={locale === "zh" ? "案例目录" : "Case map"} items={navItems} />
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
        <section id="overview" className="scroll-mt-24 mt-16 md:mt-24">
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

      <Reveal>
        <section id="evidence-boundary" className="scroll-mt-24 mt-16 border-t border-ink/10 pt-16 md:mt-24 md:pt-24">
          <p className="label mb-8">{c.evidenceLabel}</p>
          <h2 className="display-3 mb-8">{c.evidenceTitle}</h2>
          <div className="studio-chip rounded-2xl p-6 md:p-8">
            <ul className="space-y-4">
              {c.evidenceItems.map((item) => (
                <li key={item} className="flex gap-3 text-ink/75 leading-relaxed">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--studio-accent)" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      {/* Understand the users */}
      <Reveal>
        <section id="users" className="scroll-mt-24 mt-16 md:mt-24 border-t border-ink/10 pt-16 md:pt-24">
          <p className="label mb-8">{c.usersLabel}</p>
          <h2 className="display-3 mb-6">{c.usersTitle}</h2>
          <p className="lede-fill">{c.usersIntro}</p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10 bg-[var(--studio-card)] shadow-sm">
            <div className="p-5 md:p-7">
              <p className="studio-label !text-[0.65rem]">{c.journeyLabel}</p>
              <h3 className="mt-3 text-2xl font-medium text-ink md:text-3xl">{c.journeyTitle}</h3>
            </div>
            <div className="px-5 pb-5 md:px-7 md:pb-7">
              <Image
                src={c.pillarsImage}
                alt={c.usersTitle}
                width={1800}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="h-auto w-full rounded-2xl"
              />
            </div>
            <div className="relative px-5 pb-6 md:px-7 md:pb-7">
              <div
                aria-hidden
                className="absolute left-[17%] right-[17%] top-5 hidden h-px md:block"
                style={{ background: "linear-gradient(90deg, #d47ae8, #6964ec, #2699e8)" }}
              />
            <ol className="relative grid gap-3 md:grid-cols-3 md:gap-6">
              {c.journeySteps.map((step, index) => (
                <li
                  key={step.role}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-3 rounded-2xl border border-ink/10 bg-paper/85 p-4 md:block md:border-0 md:bg-transparent md:p-0 md:text-center md:shadow-none"
                >
                  <span
                    className="row-span-3 flex h-10 w-10 items-center justify-center rounded-full border bg-[var(--studio-card)] font-mono text-xs md:relative md:z-10 md:mx-auto"
                    style={{ borderColor: ["#d47ae8", "#6964ec", "#2699e8"][index], color: ["#b94ccc", "#5752d7", "#1686d1"][index] }}
                  >
                    0{index + 1}
                  </span>
                  <div className="md:mt-4">
                    <p className="studio-label !text-[0.58rem]" style={{ color: ["#b94ccc", "#5752d7", "#1686d1"][index] }}>
                      {step.role}
                    </p>
                    <h4 className="mt-2 text-base font-medium leading-snug text-ink md:text-lg">{step.action}</h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55 md:mx-auto md:max-w-64">
                    <span aria-hidden className="mr-1" style={{ color: ["#b94ccc", "#5752d7", "#1686d1"][index] }}>→</span>
                    {step.handoff}
                  </p>
                </li>
              ))}
            </ol>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Design solutions */}
      <Reveal>
        <section id="solutions" className="scroll-mt-24 mt-16 md:mt-24 border-t border-ink/10 pt-16 md:pt-24">
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
        <section id="outcome" className="scroll-mt-24 mt-16 md:mt-24 border-t border-ink/10 pt-16 md:pt-24">
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
