import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import LatestWorks from "@/components/LatestWorks";
import TestimonialSection from "@/components/TestimonialSection";
import Partners from "@/components/Partners";
import SpecializationSection from "@/components/SpecializationSection";
import WhyChooseUs from "@/components/WhyChooseUs";

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

