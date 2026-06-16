import type { Locale } from "@/lib/i18n/types";
import { en } from "./en";
import { zh } from "./zh";

export type { Dictionary } from "./en";

const dictionaries = { en, zh } as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
