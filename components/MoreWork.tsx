"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { getMoreWork } from "@/content/more-work";
import { Reveal } from "@/components/Reveal";

export function MoreWork() {
  const { locale } = useLocale();
  const { label, title, lede, cta, items } = getMoreWork(locale);

  return (
    <section className="container-grid pt-10 md:pt-16 pb-4">
      <Reveal className="space-y-6">
        <p
          className="studio-label inline-flex items-center gap-2 rounded-full px-4 py-2"
          style={{ background: "var(--studio-accent-soft)" }}
        >
          <span
            className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: "var(--studio-green)" }}
          />
          {label}
        </p>
        <h2 className="section-title">{title}</h2>
        <p className="lede-fill">{lede}</p>
      </Reveal>

      <div className="mt-10 space-y-6">
        {items.map((item) => (
          <Reveal key={item.slug}>
            <Link
              href={item.href}
              className="studio-project-card group grid grid-cols-1 gap-6 rounded-3xl p-5 md:grid-cols-2 md:items-center md:gap-8 md:p-6"
            >
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "1600 / 820" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="studio-label !text-[0.65rem]">{item.meta}</p>
                <h3 className="mt-2 text-2xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-ink/70 leading-relaxed">{item.blurb}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="studio-chip rounded-full px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p
                  className="mt-5 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em]"
                  style={{ color: "var(--studio-accent)" }}
                >
                  {cta}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 ease-swiss group-hover:translate-x-1"
                  >
                    →
                  </span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
