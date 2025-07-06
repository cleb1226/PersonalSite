import Section from "~/enums/section";

export type tabObj = {
  name: string;
  section: string;
  sectionValue: Section;
};

const tabs: Array<tabObj> = [
  { name: "Skills", section: "skills", sectionValue: Section.Skill },
  { name: "Experience", section: "experience", sectionValue: Section.Exp },
  { name: "Education", section: "education", sectionValue: Section.Edu },
];

export default tabs;
