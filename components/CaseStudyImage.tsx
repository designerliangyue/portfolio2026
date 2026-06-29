"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Cached images can finish loading before onLoad attaches — catch that.
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setLoaded(true);
  }, [candidateIndex]);

  if (missing || candidateIndex >= candidates.length) return null;

  const src = candidates[candidateIndex];

  const tryNext = () => {
    setLoaded(false);
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((i) => i + 1);
      return;
    }
    setMissing(true);
  };

  return (
    <div className={`relative overflow-hidden bg-ink/[0.035] ${className}`}>
      <Image
        key={src}
        ref={imgRef}
        src={src}
        alt={alt}
        width={2400}
        height={1600}
        sizes="(max-width: 768px) 100vw, 85vw"
        className={`h-auto w-full transition-opacity duration-700 ease-swiss ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: "100%", height: "auto" }}
        onError={tryNext}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <span className="pointer-events-none absolute inset-0 animate-pulse bg-ink/[0.05]" aria-hidden />
      )}
    </div>
  );
}
