import Header from "~/components/header";
import type { Route } from "./+types/home";
import SkillsSection from "~/components/skillsSection";
import ExperienceSection from "~/components/experienceSection";
import EducationSection from "~/components/educationSection";
import Bio from "~/components/bio";
import { useRef } from "react";
import ProjectsSection from "~/components/projectsSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caleb Ince" },
    { name: "description", content: "Home to the wonderful world of Caleb" },
  ];
}

export default function Home() {
  const skillRef = useRef<HTMLElement | null>(null);
  const expRef = useRef<HTMLElement | null>(null);
  const eduRef = useRef<HTMLElement | null>(null);
  const projRef = useRef<HTMLElement | null>(null);

  return (
    <div>
      <Header
        skillRef={skillRef}
        expRef={expRef}
        projRef={projRef}
        eduRef={eduRef}
      />
      <div className="p-5">
        <Bio />
        <SkillsSection ref={skillRef} />
        <ExperienceSection ref={expRef} />
        <EducationSection ref={eduRef} />
      </div>
    </div>
  );
}
