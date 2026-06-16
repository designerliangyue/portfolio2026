"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectSlug } from "@/content/images";
import { processImageCandidates } from "@/content/images";

type CaseStudyImageProps = {
  slug: ProjectSlug;
  imageId: string;
  alt: string;
  className?: string;
};

export function CaseStudyImage({ slug, imageId, alt, className = "" }: CaseStudyImageProps) {
  const candidates = processImageCandidates(slug, imageId);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [missing, setMissing] = useState(false);

  if (missing || candidateIndex >= candidates.length) return null;

  const src = candidates[candidateIndex];

  const tryNext = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((i) => i + 1);
      return;
    }
    setMissing(true);
  };

  return (
    <div className={`overflow-hidden border border-ink/10 bg-paper ${className}`}>
      <Image
        key={src}
        src={src}
        alt={alt}
        width={2400}
        height={1600}
        sizes="(max-width: 768px) 100vw, 85vw"
        className="h-auto w-full"
        style={{ width: "100%", height: "auto" }}
        onError={tryNext}
      />
    </div>
  );
}
