import { useCallback } from "react";
import skills, { type skillType } from "~/data/skills";
import type { SectionProps } from "./sectionProps";

const SkillsSection = ({ ref }: SectionProps) => {
  const renderSkills = useCallback(
    () =>
      skills.map((skillSection: skillType) => {
        const chips = skillSection.skills.map((skill, index) => (
          <div
            className="flex m-2 p-3 print:p-0.5 print:m-0 bg-gray-950/20 dark:bg-amber-50/20 rounded-3xl hover:bg-main/30 shadow-lg shadow-gray-600 dark:shadow-main/50 print:shadow-none transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            key={`skill-chip-${skillSection.type}-${skill.name}-${index}`}
          >
            <span className="print:hidden mr-1 flex items-center">
              {skill.icon && <skill.icon />}
            </span>
            <span className="print:text-xs">{skill.name}</span>
          </div>
        ));
        return (
          <div
            className="flex flex-col items-center print:items-start print:pl-2"
            key={`skill-section-${skillSection.type}`}
          >
            <h5 className="text-2xl print:hidden font-semibold">
              {skillSection.type}
            </h5>
            <div className="flex flex-wrap justify-center print:justify-start">
              {chips}
            </div>
          </div>
        );
      }),
    []
  );

  return (
    <section ref={ref} id="skills">
      <h3>Skills</h3>
      <hr />
      {renderSkills()}
    </section>
  );
};

export default SkillsSection;
