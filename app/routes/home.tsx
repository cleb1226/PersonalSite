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
import { useCallback, useEffect } from "react";
import Section from "~/enums/section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caleb Ince" },
    { name: "description", content: "Home to the wonderful world of Caleb" },
  ];
}

let styles = getComputedStyle(document.documentElement);
let smBreak = styles.getPropertyValue("--breakpoint-sm");
let mdBreak = styles.getPropertyValue("--breakpoint-md");
let lgBreak = styles.getPropertyValue("--breakpoint-lg");
const rootFontSize = parseFloat(styles.fontSize);
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: parseInt(smBreak) * rootFontSize,
      md: parseInt(mdBreak) * rootFontSize,
      lg: parseInt(lgBreak) * rootFontSize,
      xl: 1536,
    },
  },
});

export default function Home() {
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  // const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  // useEffect(() => {
  //   const breakpoints = [
  //     { name: "isSm", value: isSm },
  //     { name: "isMd", value: isMd },
  //     { name: "isLg", value: isLg },
  //   ];
  //   const currentBreakpoint = breakpoints.filter((bp) => bp.value);
  //   console.log("current breakpoint", currentBreakpoint[0].name);
  // }, [isSm, isMd, isLg]);

  const calculateThreshold = useCallback((refType: Section) => {
    const baseThreshold = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    let returnThreshold: number[] = [];

    switch (refType) {
      case Section.Skill:
      default:
        if (isSm) {
          returnThreshold = baseThreshold.slice(1);
        } else if (isMd) {
          returnThreshold = baseThreshold.slice(0);
        } else {
          returnThreshold = baseThreshold.slice(0);
        }
        break;
      case Section.Exp:
        if (isSm) {
          returnThreshold = baseThreshold.slice(2);
        } else if (isMd) {
          returnThreshold = baseThreshold.slice(4);
        } else {
          returnThreshold = baseThreshold.slice(3);
        }
        break;
      case Section.Edu:
        if (isSm) {
          returnThreshold = baseThreshold.slice(1);
        } else if (isMd) {
          returnThreshold = baseThreshold.slice(3);
        } else {
          returnThreshold = baseThreshold.slice(0);
        }
        break;
    }
    return returnThreshold;
  }, []);

  const skillInView: InViewHookResponse = useInView({
    threshold: calculateThreshold(Section.Skill),
  });
  const expInView: InViewHookResponse = useInView({
    threshold: calculateThreshold(Section.Exp),
  });
  const eduInView: InViewHookResponse = useInView({
    threshold: calculateThreshold(Section.Edu),
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
