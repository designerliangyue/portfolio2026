"use client";

import { useLocale } from "@/components/LocaleProvider";
import type { Locale } from "@/lib/i18n/types";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.18em]"
      role="group"
      aria-label="Language"
    >
      {(["en", "zh"] as Locale[]).map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 ? <span className="text-ink/25 select-none">/</span> : null}
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
