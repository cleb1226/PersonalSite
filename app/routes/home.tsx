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
import { createTheme, useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useEffect, useRef, type RefObject } from "react";
import Section from "~/enums/section";

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

  return (
    <div>
      <Header skillRef={skillRef} expRef={expRef} eduRef={eduRef} />
      <div className="p-5">
        <Bio />
        <SkillsSection skillRef={skillRef} />
        <ExperienceSection expRef={expRef} />
        <EducationSection eduRef={eduRef} />
      </div>
    </div>
  );
}
