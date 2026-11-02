import type { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects & Architectural Portfolio | Build World Constructions",
  description:
    "Discover our completed and ongoing construction projects, luxury residences, commercial centers, and architectural landmarks across India and the Middle East.",
};

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <ProjectsPage />
    </main>
  );
}
