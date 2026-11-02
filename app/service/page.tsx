import type { Metadata } from "next";
import Service from "@/components/service/service";

export const metadata: Metadata = {
  title: "Services & Construction Expertise | Build World Constructions",
  description:
    "Comprehensive construction services including digital survey, structural engineering, interior finishing, electrical, plumbing, and turnkey project execution.",
};

export default function ServicePage() {
  return (
    <>
      <Service />
    </>
  );
}
