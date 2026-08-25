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

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ProjectDetailPage id={id} />;
}

