import type { Metadata } from "next";
import AwardsPage from "@/components/AwardsPage";

export const metadata: Metadata = {
  title: "Achievements & Recognition | Build World Constructions",
  description:
    "Explore our milestones, industry awards, ISO certifications, and recognitions honoring our commitment to building excellence and structural integrity.",
};

export default function AwardsRoute() {
  return <AwardsPage />;
}