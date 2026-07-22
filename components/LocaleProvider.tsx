"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { getDictionary } from "@/content/i18n";
import type { Dictionary } from "@/content/i18n";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale
} from "@/lib/i18n/types";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  name: string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

// Browsers that block site data (strict privacy settings, enterprise policy,
// some extensions) throw SecurityError on any localStorage access. Reading it
// unguarded inside an effect crashes the whole tree via the error boundary,
// so both call sites degrade to "preference simply isn't persisted".
function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return stored === "zh" ? "zh" : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

function writeStoredLocale(locale: Locale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Storage unavailable — switching still works for this session.
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale === "zh" ? "zh-Hans" : "en";
    writeStoredLocale(locale);
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: getDictionary(locale),
      name: getDictionary(locale).name
    }),
    [locale, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
