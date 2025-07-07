import Header from "~/components/header";
import type { Route } from "./+types/home";
import SkillsSection from "~/components/skillsSection";
import ExperienceSection from "~/components/experienceSection";
import EducationSection from "~/components/educationSection";
import Bio from "~/components/bio";
import {
  useInView,
  type InViewHookResponse,
} from "react-intersection-observer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caleb Ince" },
    { name: "description", content: "Home to the wonderful world of Caleb" },
  ];
}

export default function Home() {
  const skillInView: InViewHookResponse = useInView({
    threshold: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });
  const expInView: InViewHookResponse = useInView({
    threshold: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });
  const eduInView: InViewHookResponse = useInView({
    threshold: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });

  return (
    <div>
      <Header
        skillInView={skillInView}
        expInView={expInView}
        eduInView={eduInView}
      />
      <div className="p-5">
        <Bio />
        <SkillsSection skillRef={skillInView.ref} />
        <ExperienceSection expRef={expInView.ref} />
        <EducationSection eduRef={eduInView.ref} />
      </div>
    </div>
  );
}
