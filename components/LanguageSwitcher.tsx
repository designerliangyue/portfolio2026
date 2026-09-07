"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import type { Locale } from "@/lib/i18n/types";

const PROMINENT_SWITCHER_HOSTS = new Set([
  "yue-design.studio",
  "www.yue-design.studio"
]);

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [isCustomDomain, setIsCustomDomain] = useState(false);

  useEffect(() => {
    setIsCustomDomain(
      process.env.NODE_ENV === "development" ||
        PROMINENT_SWITCHER_HOSTS.has(window.location.hostname)
    );
  }, []);

  if (isCustomDomain) {
    const nextLocale: Locale = locale === "en" ? "zh" : "en";
    const label = locale === "en" ? "中文作品集" : "English version";

    return (
      <button
        type="button"
        onClick={() => setLocale(nextLocale)}
        className="group inline-flex min-h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--studio-accent)] bg-[var(--studio-accent-soft)] px-3 font-mono text-xs tracking-[0.04em] text-[var(--studio-accent)] shadow-[var(--studio-shadow-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--studio-accent)] hover:text-[var(--studio-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--studio-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:min-h-10 md:gap-2 md:px-4"
        aria-label={
          locale === "en" ? "切换到中文作品集" : "Switch to English portfolio"
        }
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 shrink-0"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3.5 12h17M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21M12 3C9.8 5.4 8.7 8.4 8.7 12s1.1 6.6 3.3 9"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
        <span className="sm:hidden">{locale === "en" ? "中文" : "EN"}</span>
        <span className="hidden sm:inline">{label}</span>
      </button>
    );
  }

  return (
    <div
      className="flex shrink-0 items-center gap-1 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em]"
      role="group"
      aria-label="Language"
    >
      {(["en", "zh"] as Locale[]).map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 ? (
            <span className="select-none text-ink/25">/</span>
          ) : null}
          <button
            type="button"
            onClick={() => setLocale(code)}
            className={`transition-colors ${
              locale === code ? "text-ink" : "text-ink/40 hover:text-ink/70"
            }`}
            aria-pressed={locale === code}
          >
            {code === "en" ? "EN" : "中文"}
          </button>
        </span>
      ))}
    </div>
  );
}
