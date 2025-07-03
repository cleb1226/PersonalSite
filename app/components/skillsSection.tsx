import { useCallback, type RefObject } from "react";
import skills, { type skillType } from "~/data/skills";

interface SkillProps {
  skillRef: RefObject<HTMLElement | null>;
}

const SkillsSection = ({ skillRef }: SkillProps) => {
  const renderSkills = useCallback(
    () =>
      skills.map((skillSection: skillType) => {
        const chips = skillSection.skills.map((skill, index) => (
          <div
            className="flex m-2 p-3 bg-gray-950/20 dark:bg-amber-50/20 rounded-3xl hover:bg-main/30 shadow-lg shadow-gray-600 dark:shadow-main/50 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            key={`skill-chip-${skillSection.type}-${skill.name}-${index}`}
          >
            <span className="mr-1 flex items-center">
              {skill.icon && <skill.icon />}
            </span>
            <span>{skill.name}</span>
          </div>
        ));
        return (
          <div
            className="flex flex-col items-center"
            key={`skill-section-${skillSection.type}`}
          >
            <h5 className="text-2xl font-semibold">{skillSection.type}</h5>
            <div className="flex flex-wrap justify-center">{chips}</div>
          </div>
        );
      }),
    []
  );

  return (
    <section ref={skillRef} id="skills" className="mt-3">
      <h3 className="text-3xl font-bold">Skills</h3>
      <hr />
      {renderSkills()}
    </section>
  );
};

export default SkillsSection;
