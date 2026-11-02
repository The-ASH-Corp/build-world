import type { Metadata } from "next";
import Gallery from "@/components/Gallery/Gallery";

export const metadata: Metadata = {
  title: "Photo Gallery | Build World Constructions",
  description:
    "Browse through our curated gallery of architectural photography, structural execution, project handovers, and milestones built to perfection.",
};

export default function GalleryPage() {
  return (
    <>
      <Gallery />
    </>
  );
}