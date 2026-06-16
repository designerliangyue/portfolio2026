/**
 * Cover images — drop a file into public/images/{slug}/ with one of these names.
 * First match wins: cover.jpg → cover.png → cover.webp
 */
export const COVER_CANDIDATES = ["cover.jpg", "cover.png", "cover.webp"] as const;

/** Same ratio as case-study hero — keeps home thumbnails uncropped */
export const COVER_ASPECT_CLASS = "aspect-[16/8]";

export function coverImageCandidates(slug: string): string[] {
  return COVER_CANDIDATES.map((name) => `/images/${slug}/${name}`);
}
