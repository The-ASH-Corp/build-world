import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | Build World Constructions",
  description:
    "Learn about Build World Constructions, an ISO 9001:2015 certified company with 25+ years of experience delivering premium residential and commercial landmarks across South India and the Middle East.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
