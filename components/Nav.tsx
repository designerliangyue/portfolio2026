"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Nav() {
  const { t, name } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="container-grid flex h-16 items-center justify-between gap-3 md:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
            <path
              d="M12 1.5 14 9.5 22 12 14 14.5 12 22.5 10 14.5 2 12 10 9.5 12 1.5Z"
              fill="var(--studio-accent)"
            />
          </svg>
          <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] text-ink">
            {name}
          </span>
        </Link>

        <nav className="flex shrink-0 items-center gap-4 md:gap-8">
          <Link
            href="/#work"
            className="hidden whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-[var(--studio-accent)] sm:inline-block"
          >
            {t.nav.work}
          </Link>
          <Link
            href="/about"
            className="hidden whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-[var(--studio-accent)] sm:inline-block"
          >
            {t.nav.about}
          </Link>
          <div className="hidden h-4 w-px shrink-0 bg-ink/15 md:block" />
          <LanguageSwitcher />
          <a
            href="mailto:designer.liangyue@gmail.com"
            className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-90 sm:inline-flex"
            style={{ background: "var(--studio-accent)", color: "var(--studio-card)" }}
          >
            {t.nav.contact}
            <span aria-hidden>↗</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink sm:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {menuOpen ? (
        <div className="border-t border-ink/10 px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/#work"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-[0.18em] text-ink/80"
            >
              {t.nav.work}
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-[0.18em] text-ink/80"
            >
              {t.nav.about}
            </Link>
            <a
              href="mailto:designer.liangyue@gmail.com"
              className="inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.18em]"
              style={{ background: "var(--studio-accent)", color: "var(--studio-card)" }}
            >
              {t.nav.contact}
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
