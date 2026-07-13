"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { getDigitalProducts } from "@/content/digital-products";
import { Reveal } from "@/components/Reveal";

export function DigitalProductsView() {
  const { locale } = useLocale();
  const c = getDigitalProducts(locale);

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

        <p className="lede-fill mt-10 md:mt-12">{c.intro}</p>
      </header>

      {/* Categories */}
      {c.categories.map((cat) => (
        <Reveal key={cat.label}>
          <section className="mt-16 md:mt-24 border-t border-ink/10 pt-16 md:pt-24">
            <p className="label mb-8">{cat.label}</p>
            <div className="space-y-6">
              {cat.projects.map((p) => (
                <div key={p.title} className="studio-chip overflow-hidden rounded-3xl">
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-medium text-ink md:text-2xl">{p.title}</h3>
                    <p className="mt-2 max-w-3xl text-ink/70 leading-relaxed">{p.blurb}</p>
                  </div>
                  <div className="grid gap-3 px-6 pb-6 sm:grid-cols-2 md:px-8 md:pb-8">
                    {p.images.map((src, i) => (
                      <div
                        key={src}
                        className="relative w-full overflow-hidden rounded-xl"
                        style={{ aspectRatio: "1400 / 788", background: "var(--paper)" }}
                      >
                        <Image
                          src={src}
                          alt={`${p.title} — ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 540px"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      ))}

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
