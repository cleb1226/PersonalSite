import Header from "~/components/header";
import type { Route } from "./+types/home";
import SkillsSection from "~/components/skillsSection";
import ExperienceSection from "~/components/experienceSection";
import EducationSection from "~/components/educationSection";
import Bio from "~/components/bio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caleb Ince" },
    { name: "description", content: "Home to the wonderful world of Caleb" },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <Bio />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  );
}
