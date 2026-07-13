"use client";

import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectCover } from "@/components/ProjectCover";
import { useLocale } from "@/components/LocaleProvider";

export function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  const labels = t.projectCard;

  return (
    <Link
      href={`/work/${project.slug}`}
      className="studio-project-card group block rounded-3xl p-6 md:p-10"
    >
      <div className="mb-5 flex flex-wrap items-center gap-3 md:mb-6">
        <span
          className="font-mono text-xs tracking-[0.14em] rounded-full px-3 py-1.5"
          style={{ background: "var(--studio-accent-soft)", color: "var(--studio-accent)" }}
        >
          {project.index}
        </span>
        <span className="studio-label !text-[0.7rem]">{project.period}</span>
      </div>

      <h3
        className={`display-3 text-[clamp(1.875rem,4vw,3rem)] leading-[1.05] ${
          locale === "zh" ? "project-card-title" : ""
        }`}
      >
        {project.title}
      </h3>
      <p className="lede-fill mt-4">{project.summary}</p>

      <ProjectCover
        project={project}
        variant="card"
        className="mt-6 rounded-2xl md:mt-8"
      />

      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 md:mt-8">
        <p className="text-sm text-ink">
          <span className="studio-label mr-2 !text-[0.65rem]">{labels.role}</span>
          {project.role}
        </p>
        <p className="text-sm text-ink">
          <span className="studio-label mr-2 !text-[0.65rem]">{labels.market}</span>
          {project.market}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="studio-chip rounded-full px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink/60"
          >
            {tag}
          </span>
        ))}
      </div>

      <p
        className="mt-6 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] md:mt-8"
        style={{ color: "var(--studio-accent)" }}
      >
        {labels.readCase.replace("→", "").trim()}
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 ease-swiss group-hover:translate-x-1"
        >
          →
        </span>
      </p>
    </Link>
  );
}
