"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

export function Footer() {
  const { locale, t } = useLocale();
  const year = new Date().getFullYear();
  const updated = new Date().toLocaleDateString(locale === "zh" ? "zh-CN" : "en-GB", {
    month: "short",
    year: "numeric"
  });

  return (
    <footer className="mt-16">
      <div className="container-grid pb-10 pt-4 md:pb-14">
        <div className="studio-float rounded-3xl p-8 md:p-14">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p
                className="studio-label inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: "var(--studio-accent-soft)" }}
              >
                <span
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--studio-green)" }}
                />
                {t.footer.connect}
              </p>
              <h2
                className={`mt-6 display-2 ${locale === "zh" ? "footer-title-zh" : ""}`}
              >
                {t.footer.title}
              </h2>
              <p className="lede mt-6">{t.footer.lede}</p>
            </div>

            <div className="lg:col-span-5">
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <a
                  href="mailto:designer.liangyue@gmail.com"
                  className="rounded-full px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] transition-opacity hover:opacity-90"
                  style={{ background: "var(--studio-accent)", color: "var(--studio-card)" }}
                >
                  designer.liangyue@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/liang-y"
                  target="_blank"
                  rel="noreferrer"
                  className="studio-chip rounded-full px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink/80 transition-colors hover:text-[var(--studio-accent)]"
                >
                  linkedin.com/in/liang-y ↗
                </a>
                <Link
                  href="/about"
                  className="studio-chip rounded-full px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink/80 transition-colors hover:text-[var(--studio-accent)]"
                >
                  {t.footer.aboutLink.replace("→", "").trim()} →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
            {t.footer.copyright(year)}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
            {t.footer.updated(updated)}
          </p>
        </div>
      </div>
    </footer>
  );
}
