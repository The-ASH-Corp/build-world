"use client";

import React from "react";
import IntroductionSection from "@/components/about/IntroductionSection";
import LegacySection from "@/components/about/LegacySection";
import ApproachSection from "@/components/about/ApproachSection";
import LeadershipSection from "@/components/about/LeadershipSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#111318] text-white overflow-hidden">
      <IntroductionSection />
      <LegacySection />
      <ApproachSection />
      <LeadershipSection />
    </div>
  );
}
