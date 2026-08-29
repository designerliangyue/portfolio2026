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
  crossCultural?: { heading: string; text: string }[];
  crossCulturalLabel?: string;
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
  if (cell.kind === "measurement-loop") {
    const steps =
      locale === "zh"
        ? ["发布", "使用数据分析", "应用内调研", "确定优先级", "下一模块"]
        : ["Release", "Usage signal", "Survey", "Prioritization", "Next module"];
    const description =
      locale === "zh"
        ? "上线后，我将使用数据追踪与应用内调研结合，用来识别代理人的流失节点、真实价值点，以及下一批增长模块的优先级。"
        : "After launch, I paired usage tracking with in-app surveys to identify where agents dropped off, what they valued, and which growth modules should be prioritized next.";

    return (
      <figure className="flex h-full flex-col">
        <div className="flex flex-1 flex-col justify-between rounded-[2px] border border-ink/10 bg-[var(--studio-card)] p-6 md:p-8">
          <div>
            <p className="label mb-8">{locale === "zh" ? "效果衡量闭环" : "Measurement loop"}</p>
            <ol className="space-y-0" aria-label={locale === "zh" ? "效果衡量闭环步骤" : "Measurement loop steps"}>
              {steps.map((step, stepIndex) => (
                <li key={step} className="grid grid-cols-[2rem_1fr] gap-x-4">
                  <div className="flex flex-col items-center" aria-hidden>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--studio-accent)] bg-[var(--studio-accent-soft)] font-mono text-[10px] text-[var(--studio-accent)]">
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    {stepIndex < steps.length - 1 ? (
                      <span className="h-7 w-px bg-ink/15" />
                    ) : null}
                  </div>
                  <span className="pt-1 text-base text-ink md:text-lg">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-8 border-t border-ink/10 pt-6 text-sm leading-relaxed text-ink/70 md:text-base">
            {description}
          </p>
        </div>
        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
          {locale === "zh" ? "效果衡量闭环" : "Measurement loop"}
        </figcaption>
      </figure>
    );
  }

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

export function CaseStudyGallery({
  slug,
  blocks,
  projectTitle,
  crossCultural,
  crossCulturalLabel
}: CaseStudyGalleryProps) {
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

        if (block.type === "label") {
          return (
            <h3 key={`label-${index}`} className="display-3">
              {locale === "zh" && block.textZh ? block.textZh : block.text}
            </h3>
          );
        }

        if (block.type === "cross-cultural") {
          if (!crossCultural?.length) return null;
          return (
            <div key={`cross-cultural-${index}`}>
              {crossCulturalLabel ? (
                <h2 className="display-3 mb-10">{crossCulturalLabel}</h2>
              ) : null}
              <div className="case-study-split">
                {crossCultural.map((item) => (
                  <div key={item.heading} className="studio-chip rounded-2xl p-6 md:p-8">
                    <h3 className="display-3 text-xl md:text-2xl mb-4">{item.heading}</h3>
                    <p className="text-base md:text-lg leading-relaxed text-ink/80">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
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
                  preload="none"
                />
                {!block.poster ? (
                  <span
                    className="pointer-events-none absolute inset-0 -z-10 bg-ink/[0.04]"
                    aria-hidden
                  />
                ) : null}
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
