"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/content/projects";
import { COVER_ASPECT_CLASS, coverImageCandidates } from "@/content/covers";

const toneClasses: Record<Project["cover"]["tone"], string> = {
  warm: "bg-gradient-to-br from-orange-50 via-rose-50 to-amber-100",
  cool: "bg-gradient-to-br from-slate-100 via-zinc-100 to-stone-200",
  neutral: "bg-gradient-to-br from-stone-100 via-neutral-100 to-zinc-200"
};

type ProjectCoverProps = {
  project: Project;
  variant: "card" | "hero";
  className?: string;
  hoverLabel?: string;
};

export function ProjectCover({ project, variant, className = "", hoverLabel }: ProjectCoverProps) {
  const candidates = coverImageCandidates(project.slug);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [useFallback, setUseFallback] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setLoaded(true);
  }, [candidateIndex]);

  const sizes =
    variant === "card"
      ? "(max-width: 768px) 100vw, 85vw"
      : "(max-width: 768px) 100vw, 90vw";

  const tryNext = () => {
    setLoaded(false);
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((i) => i + 1);
      return;
    }
    setUseFallback(true);
  };

  const showImage = !useFallback && candidateIndex < candidates.length;
  const src = candidates[candidateIndex];

  return (
    <div
      className={`${COVER_ASPECT_CLASS} w-full ${toneClasses[project.cover.tone]} relative overflow-hidden border border-ink/10 ${className}`}
    >
      {showImage && (
        <Image
          key={src}
          ref={imgRef}
          src={src}
          alt={`${project.title} — ${project.cover.label}`}
          fill
          sizes={sizes}
          className={`object-cover ${loaded ? "opacity-100" : "opacity-0"} ${
            variant === "card"
              ? "transition-[opacity,transform] duration-700 ease-swiss will-change-transform group-hover:scale-[1.06]"
              : "transition-opacity duration-700 ease-swiss"
          }`}
          onError={tryNext}
          onLoad={() => setLoaded(true)}
        />
      )}

      {showImage && (
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink/35 via-ink/5 to-transparent"
          aria-hidden
        />
      )}

      {showImage && variant === "card" && (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-ink/70 via-ink/15 to-transparent opacity-0 transition-opacity duration-300 ease-swiss group-hover:opacity-100 [@media(hover:none)]:opacity-100"
            aria-hidden
          />
          {hoverLabel && (
            <div className="pointer-events-none absolute bottom-4 right-4 md:bottom-5 md:right-5 z-[3] flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white opacity-0 translate-y-1 transition-all duration-300 ease-swiss group-hover:opacity-100 group-hover:translate-y-0 [@media(hover:none)]:opacity-100 [@media(hover:none)]:translate-y-0">
              {hoverLabel}
              <span className="inline-block transition-transform duration-300 ease-swiss group-hover:translate-x-1">
                →
              </span>
            </div>
          )}
        </>
      )}

      {useFallback && (
        <div className="absolute inset-0 grid place-items-center" aria-hidden>
          <span
            className={
              variant === "card"
                ? "text-5xl md:text-6xl select-none"
                : "text-[12rem] opacity-30 select-none"
            }
          >
            {project.cover.emoji}
          </span>
        </div>
      )}

      <div
        className={
          showImage && !useFallback
            ? "absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] md:tracking-[0.22em] text-white/85"
            : variant === "card"
              ? "absolute bottom-4 left-4 z-10 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60"
              : "absolute bottom-6 left-6 z-10 font-mono text-xs uppercase tracking-[0.22em] text-white/85"
        }
      >
        {project.cover.label}
      </div>

      {variant === "hero" && (
        <div className="absolute top-6 right-6 z-10 font-mono text-xs uppercase tracking-[0.22em] text-white/85">
          {project.period}
        </div>
      )}
    </div>
  );
}
