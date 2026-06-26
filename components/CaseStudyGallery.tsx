"use client";

import type { GalleryBlock, GalleryGridCell } from "@/content/case-study-galleries";
import type { ProjectSlug } from "@/content/images";
import { galleryCaptionsZh, compareLabelsZh, compareTitlesZh } from "@/content/i18n/gallery-captions";
import { CaseStudyImage } from "@/components/CaseStudyImage";
import { CaseStudyMediaPlaceholder } from "@/components/CaseStudyMediaPlaceholder";
import { useLocale } from "@/components/LocaleProvider";

type CaseStudyGalleryProps = {
  slug: ProjectSlug;
  blocks: GalleryBlock[];
  projectTitle: string;
};

const aspectClass = {
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]"
} as const;

function imageAlt(projectTitle: string, id: string, caption?: string) {
  return caption ?? `${projectTitle} — ${id.replace(/-/g, " ")}`;
}

function gridCells(block: Extract<GalleryBlock, { type: "grid" }>): GalleryGridCell[] {
  if (block.cells?.length) return block.cells;
  return (block.ids ?? []).map((id) => ({ kind: "image" as const, id }));
}

function resolveCaption(
  locale: "en" | "zh",
  slug: ProjectSlug,
  id: string,
  caption?: string
) {
  if (locale === "en") return caption;
  if (slug === "cmb-cloud" && id === "design-system") {
    return galleryCaptionsZh["design-system-cmb"] ?? caption;
  }
  return galleryCaptionsZh[id] ?? caption;
}

function GridCell({
  slug,
  projectTitle,
  cell,
  locale
}: {
  slug: ProjectSlug;
  projectTitle: string;
  cell: GalleryGridCell;
  locale: "en" | "zh";
}) {
  if (cell.kind === "placeholder") {
    return (
      <CaseStudyMediaPlaceholder
        slug={slug}
        assetId={cell.assetId}
        label={cell.label}
        hint={cell.hint}
        aspect={cell.aspect}
      />
    );
  }

  if (cell.kind === "reserved") {
    const aspect = cell.aspect ?? "4/3";
    return (
      <div
        className={`${aspectClass[aspect]} border border-dashed border-ink/10 bg-ink/[0.015]`}
        aria-hidden
      />
    );
  }

  return (
    <figure>
      <CaseStudyImage
        slug={slug}
        imageId={cell.id}
        alt={imageAlt(projectTitle, cell.id, resolveCaption(locale, slug, cell.id, cell.caption))}
      />
      {resolveCaption(locale, slug, cell.id, cell.caption) ? (
        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
          {resolveCaption(locale, slug, cell.id, cell.caption)}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function CaseStudyGallery({ slug, blocks, projectTitle }: CaseStudyGalleryProps) {
  const { locale } = useLocale();
  if (!blocks.length) return null;

  return (
    <div className="mt-12 md:mt-16 space-y-10 md:space-y-14">
      {blocks.map((block, index) => {
        if (block.type === "single") {
          const caption = resolveCaption(locale, slug, block.id, block.caption);
          if (block.titleStyle) {
            return (
              <figure key={`${block.id}-${index}`}>
                {caption ? (
                  <figcaption className="font-display tracking-tightish text-2xl md:text-3xl text-ink mb-5 md:mb-6">
                    {caption}
                  </figcaption>
                ) : null}
                <CaseStudyImage
                  slug={slug}
                  imageId={block.id}
                  alt={imageAlt(projectTitle, block.id, caption)}
                />
              </figure>
            );
          }
          return (
            <figure key={`${block.id}-${index}`}>
              <CaseStudyImage
                slug={slug}
                imageId={block.id}
                alt={imageAlt(projectTitle, block.id, caption)}
              />
              {caption ? (
                <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
                  {caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        if (block.type === "compare") {
          const oldLabel =
            (locale === "zh" ? compareLabelsZh[block.oldId] : undefined) ?? block.oldLabel ?? "Before";
          const newLabel =
            (locale === "zh" ? compareLabelsZh[block.newId] : undefined) ?? block.newLabel ?? "After";
          const title =
            (locale === "zh" ? compareTitlesZh[block.oldId] : undefined) ?? block.title;
          return (
            <figure key={`${block.oldId}-${block.newId}-${index}`}>
              {title ? (
                <h3 className="font-display tracking-tightish text-2xl md:text-3xl text-ink mb-5 md:mb-6">
                  {title}
                </h3>
              ) : null}
              <div className="space-y-8">
                <div>
                  <p className="label mb-3">{oldLabel}</p>
                  <CaseStudyImage
                    slug={slug}
                    imageId={block.oldId}
                    alt={imageAlt(projectTitle, block.oldId, oldLabel)}
                  />
                </div>
                <div>
                  <p className="label mb-3">{newLabel}</p>
                  <CaseStudyImage
                    slug={slug}
                    imageId={block.newId}
                    alt={imageAlt(projectTitle, block.newId, newLabel)}
                  />
                </div>
              </div>
            </figure>
          );
        }

        if (block.type === "video") {
          return (
            <figure key={`video-${index}`}>
              <div className="relative overflow-hidden rounded-[2px] bg-ink/[0.03]">
                <video
                  className="w-full"
                  src={block.src}
                  poster={block.poster}
                  controls
                  playsInline
                  preload="metadata"
                />
                {block.badge ? (
                  <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper backdrop-blur-sm">
                    {block.badge}
                  </span>
                ) : null}
              </div>
              {block.caption ? (
                <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        if (block.type === "placeholder") {
          return (
            <CaseStudyMediaPlaceholder
              key={`${block.assetId}-${index}`}
              slug={slug}
              assetId={block.assetId}
              label={block.label}
              hint={block.hint}
              aspect={block.aspect}
            />
          );
        }

        const cols = block.columns ?? 2;
        const cells = gridCells(block);
        return (
          <figure
            key={`grid-${index}`}
            className={cols === 3 ? "case-study-split case-study-split-thirds" : "case-study-split"}
          >
            {cells.map((cell, cellIndex) => (
              <GridCell
                key={`${cell.kind}-${cellIndex}`}
                slug={slug}
                projectTitle={projectTitle}
                cell={cell}
                locale={locale}
              />
            ))}
          </figure>
        );
      })}
    </div>
  );
}
