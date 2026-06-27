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
      className="group block border-t border-ink/15 pt-8 transition-colors hover:bg-ink/[0.015]"
    >
      <div className="swiss-grid gap-y-8">
        <div className="col-span-12 md:col-span-1 font-mono text-sm uppercase tracking-[0.18em] text-ink/50">
          {project.index}
        </div>

        <div className="col-span-12 md:col-span-11 space-y-6">
          <div className="space-y-4">
            <h3
              className={`display-3 text-[clamp(1.875rem,4vw,3rem)] leading-[1.05] ${
                locale === "zh" ? "project-card-title" : ""
              }`}
            >
              {project.title}
            </h3>
            <p className="lede-fill">{project.summary}</p>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-5 border-t border-ink/15 pt-6 text-sm">
            <div>
              <dt className="label mb-1">{labels.period}</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt className="label mb-1">{labels.role}</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt className="label mb-1">{labels.market}</dt>
              <dd>{project.market}</dd>
            </div>
          </dl>

          <ProjectCover
            project={project}
            variant="card"
            hoverLabel={locale === "zh" ? "查看案例" : "View case"}
          />
        </div>
      </div>

      <div className="swiss-grid mt-6 pb-10">
        <div className="col-span-12 md:col-start-2 md:col-span-11 flex items-center gap-x-6 gap-y-2 text-xs">
          <div className="flex min-w-0 flex-1 flex-wrap gap-x-6 gap-y-2">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono uppercase tracking-[0.18em] text-ink/50">
                {tag}
              </span>
            ))}
          </div>
          <span className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-ink group-hover:translate-x-1 transition-transform duration-300">
            {labels.readCase}
          </span>
        </div>
      </div>
    </Link>
  );
}
