type AspectRatio = "16/9" | "21/9" | "4/3" | "3/2";

const aspectClass: Record<AspectRatio, string> = {
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]"
};

type CaseStudyMediaPlaceholderProps = {
  label: string;
  hint?: string;
  /** Filename without extension — matches `public/images/{slug}/{assetId}.png` */
  assetId: string;
  slug: string;
  aspect?: AspectRatio;
};

export function CaseStudyMediaPlaceholder({
  label,
  hint,
  assetId,
  slug,
  aspect = "16/9"
}: CaseStudyMediaPlaceholderProps) {
  const path = `public/images/${slug}/${assetId}.png`;

  return (
    <figure className="border border-dashed border-ink/25 bg-ink/[0.02]">
      <div
        className={`${aspectClass[aspect]} flex flex-col items-center justify-center gap-3 px-6 py-10 text-center`}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
          Image · {assetId}
        </p>
        <p className="font-display text-lg md:text-xl tracking-tightish text-ink/70 max-w-md">
          {label}
        </p>
        {hint ? (
          <p className="text-sm text-ink/50 leading-relaxed max-w-sm">{hint}</p>
        ) : null}
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
          {path}
        </p>
      </div>
    </figure>
  );
}
