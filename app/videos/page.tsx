import type { Metadata } from "next";
import VideosPage from "@/components/Videos/VideosPage";

export const metadata: Metadata = {
  title: "Videos & Cinema Gallery | Build World Constructions",
  description:
    "Explore architectural walkthroughs, handover ceremonies, and construction milestones in motion. Watch and add videos directly from the website.",
};

export default function VideosRoute() {
  return <VideosPage />;
}
