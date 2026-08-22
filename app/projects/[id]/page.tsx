import ProjectDetailPage from "@/components/ProjectDetailPage";
import { siteData } from "@/data/siteData";

export function generateStaticParams() {
  return siteData.projectsPage.works.map((project) => ({
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

