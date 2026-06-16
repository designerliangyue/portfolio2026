"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Nav() {
  const { t, name } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/80 backdrop-blur">
      <div className="container-grid flex h-14 items-center justify-between gap-4">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.22em] shrink-0">
          {name}
        </Link>
        <nav className="flex items-center gap-4 md:gap-8">
          <Link href="/#work" className="font-mono text-xs uppercase tracking-[0.18em] link-underline">
            {t.nav.work}
          </Link>
          <Link href="/about" className="font-mono text-xs uppercase tracking-[0.18em] link-underline">
            {t.nav.about}
          </Link>
          <a
            href="mailto:designer.liangyue@gmail.com"
            className="hidden md:inline-block font-mono text-xs uppercase tracking-[0.18em] link-underline"
          >
            {t.nav.contact}
          </a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
