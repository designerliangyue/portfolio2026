"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { getProjects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { MoreWork } from "@/components/MoreWork";

export function HomePage() {
  const { locale, t } = useLocale();
  const projects = getProjects(locale);

  return (
    <>
      <section className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="container-grid relative">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
            {/* Left: label badge, headline, lede, CTAs, meta chips */}
            <div className="md:col-span-7">
              <p
                className="studio-label inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: "var(--studio-accent-soft)" }}
              >
                <span
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--studio-accent)" }}
                />
                001 — {t.home.heroLabel}
              </p>

              <h1 className="hero-title mt-8 md:mt-10">
                {locale === "zh" ? (
                  <>
                    在文化与技术的交界处，
                    <br />
                    设计<span className="studio-em">可靠的产品</span>。
                  </>
                ) : (
                  <>
                    Designing reliable
                    <br />
                    products at the edge
                    <br />
                    of <span className="studio-em">culture</span> &amp;{" "}
                    <span className="studio-em">technology</span>.
                  </>
                )}
              </h1>

              <p className="lede mt-8 max-w-xl" style={{ color: "var(--ink-muted)" }}>
                {t.home.lede}
              </p>

              <div className="mt-10 flex flex-wrap gap-3 md:mt-12">
                {(
                  [
                    [t.home.based, t.home.basedValue],
                    [t.home.focus, t.home.focusValue],
                    [t.home.languages, t.home.languagesValue],
                    [t.home.status, t.home.statusValue]
                  ] as const
                ).map(([label, value]) => (
                  <p
                    key={label}
                    className="studio-chip inline-flex items-baseline gap-2 rounded-full px-4 py-2"
                  >
                    <span className="studio-label !text-[0.65rem]">{label}</span>
                    <span className="text-sm font-medium text-ink">{value}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Right: photo card with floating labels */}
            <div className="relative mx-auto w-full max-w-md md:col-span-5 md:max-w-none">
              <div
                className="relative overflow-hidden rounded-3xl"
                style={{
                  aspectRatio: "5 / 6",
                  background:
                    "linear-gradient(165deg, var(--studio-photo-1), var(--studio-photo-2))"
                }}
              >
                <div
                  aria-hidden
                  className="absolute left-1/2 top-[8%] h-[70%] w-[85%] -translate-x-1/2 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(255, 252, 244, 0.5), rgba(255, 252, 244, 0.15) 60%, transparent)"
                  }}
                />
                <Image
                  src="/images/profile-2-cutout.png"
                  alt={t.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="-translate-x-[10%] object-cover object-top"
                  priority
                />
              </div>

              {/* Floating stat labels around the photo card */}
              {t.home.heroStats.map((stat, i) => {
                const positions = [
                  "-left-2 top-6 lg:-left-6 lg:top-10",
                  // Percentage offset tracks the card height so the chip stays
                  // at her shoulder line instead of drifting onto the face
                  // when the card gets shorter at tablet widths.
                  "-right-2 bottom-[8%] lg:-right-6 lg:bottom-[15%]",
                  "-bottom-4 left-4 md:left-2 lg:-bottom-5 lg:left-6"
                ] as const;
                const accents = [
                  "var(--studio-accent)",
                  "var(--studio-green)",
                  "var(--studio-accent)"
                ] as const;
                return (
                  <div
                    key={stat.label}
                    className={`studio-float absolute max-w-[170px] rounded-2xl px-4 py-2.5 lg:max-w-[240px] lg:px-5 lg:py-3 ${positions[i]}`}
                  >
                    <p className="flex items-baseline gap-2">
                      <span
                        className="inline-block h-1.5 w-1.5 shrink-0 self-center rounded-full"
                        style={{ background: accents[i] }}
                      />
                      <CountUp
                        value={stat.value}
                        className="text-lg font-extrabold text-ink lg:text-2xl"
                      />
                    </p>
                    <p className="studio-label mt-0.5 !text-[0.6rem] lg:!text-[0.65rem]">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Marquee items={[...t.marquee]} />

      <section id="work" className="container-grid pt-20 md:pt-32 pb-16 md:pb-24">
        <Reveal className="mb-14 space-y-6 md:mb-20">
          <p
            className="studio-label inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: "var(--studio-accent-soft)" }}
          >
            <span
              className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: "var(--studio-accent)" }}
            />
            002 — {t.home.workLabel}
          </p>
          <h2 className="section-title">
            {locale === "zh" ? (
              <>
                战略前瞻
                <span className="zh-slash">/</span>
                <span className="studio-em">跨文化规模</span>
                <span className="zh-slash">/</span>
                企业级深度
              </>
            ) : (
              <>
                Strategic foresight. <span className="studio-em">Cross-cultural scale.</span>{" "}
                Enterprise depth.
              </>
            )}
          </h2>
          <p className="lede-fill">{t.home.workLede}</p>
        </Reveal>

        <div className="space-y-10 md:space-y-14">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <MoreWork />

      <section className="container-grid pt-16 md:pt-32 pb-12 md:pb-16">
        <Reveal className="space-y-6">
          <p
            className="studio-label inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: "var(--studio-accent-soft)" }}
          >
            <span
              className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: "var(--studio-accent)" }}
            />
            003 — {t.home.aboutLabel}
          </p>
          <h2 className="section-title">
            {locale === "zh" ? (
              <>
                一位以结果为导向的设计师——在可靠性与
                <span className="studio-em">创新</span>
                之间取得平衡，扎根于
                <span className="studio-em">用户研究</span>
                ，并在
                <span className="studio-em">真实约束</span>
                中不断打磨。
              </>
            ) : (
              <>
                A results-focused designer who merges reliability with{" "}
                <span className="studio-em">innovation</span> — grounded in{" "}
                <span className="studio-em">user research</span>, sharpened by{" "}
                <span className="studio-em">real-world constraints</span>.
              </>
            )}
          </h2>
          <p className="lede-fill">{t.home.aboutLede}</p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em]"
            style={{ color: "var(--studio-accent)" }}
          >
            {t.home.aboutLink.replace("→", "").trim()}
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 ease-swiss group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
