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
    <footer className="mt-16 border-t border-ink/10">
      <div className="container-grid py-16">
        <div className="swiss-grid items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="label mb-6">{t.footer.connect}</p>
            <h2
              className={
                locale === "zh"
                  ? "display-2 footer-title-zh md:whitespace-nowrap"
                  : "display-2 md:whitespace-nowrap"
              }
            >
              {t.footer.title}
            </h2>
            <p className="lede mt-8">{t.footer.lede}</p>
          </div>
          <div className="col-span-12 md:col-start-9 md:col-span-4 text-left md:text-right">
            <ul className="space-y-4 text-lg md:ml-auto md:w-fit">
              <li>
                <a className="link-underline" href="mailto:designer.liangyue@gmail.com">
                  designer.liangyue@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="link-underline"
                  href="https://www.linkedin.com/in/liang-y"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/liang-y
                </a>
              </li>
              <li>
                <Link className="link-underline" href="/about">
                  {t.footer.aboutLink}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rule mt-16" />
        <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
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
