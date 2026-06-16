import imagesJson from "./images.json";

export type ProjectSlug = "ignite" | "ai-copilot" | "cmb-cloud";

export type ImageKey = string;

const EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"] as const;

export const projectImages = imagesJson as Record<ProjectSlug, Record<ImageKey, string>>;

/** Build candidate URLs for a process image (registry path + extension fallbacks). */
export function processImageCandidates(slug: ProjectSlug, key: ImageKey): string[] {
  const registered = projectImages[slug]?.[key];
  if (registered) {
    const base = registered.replace(/\.(png|jpe?g|webp)$/i, "");
    const seen = new Set<string>();
    for (const ext of EXTENSIONS) {
      seen.add(`${base}${ext}`);
    }
    seen.add(registered);
    return [...seen];
  }
  return EXTENSIONS.map((ext) => `/images/${slug}/${key}${ext}`);
}

export function hasImageKey(slug: ProjectSlug, key: ImageKey): boolean {
  return Boolean(projectImages[slug]?.[key]);
}
