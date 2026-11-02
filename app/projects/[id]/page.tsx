import type { Metadata } from "next";
import ProjectDetailPage from "@/components/ProjectDetailPage";
import { projectsData } from "@/data/projectsData";

export function generateStaticParams() {
  return projectsData.projectsPage.works.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.projectsPage.works.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Build World Constructions",
      description: "Project details not found.",
    };
  }

  const cleanDescription =
    project.description && project.description.trim().length > 0
      ? project.description
      : `${project.title} - ${project.category} project located in ${project.location} by Build World Constructions.`;

  return {
    title: `${project.title.trim()} | Build World Constructions`,
    description: cleanDescription,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ProjectDetailPage id={id} />;
}
