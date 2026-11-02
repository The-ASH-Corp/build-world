import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import LatestWorks from "@/components/LatestWorks";
import TestimonialSection from "@/components/TestimonialSection";
import Partners from "@/components/Partners";
import SpecializationSection from "@/components/SpecializationSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "Build World Constructions | Structural Integrity & Excellence",
  description:
    "ISO 9001:2015 certified premier construction company based in Calicut, Kerala. Specializing in luxury residential villas, commercial landmarks, and turnkey construction across South India and the Middle East.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TeamSection />
      <LatestWorks />
      <TestimonialSection />
      <Partners />
      <SpecializationSection />
      <WhyChooseUs />
    </>
  );
}
