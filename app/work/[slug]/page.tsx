import { projects, projectBySlug } from "@/content/projects";
import { CaseStudyView } from "@/components/CaseStudyView";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Liang Yue`,
    description: project.summary
  };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  return <CaseStudyView slug={params.slug} />;
}
