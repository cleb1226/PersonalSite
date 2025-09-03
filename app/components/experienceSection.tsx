import { useCallback } from "react";
import experiences from "~/data/experience";
import type { SectionProps } from "./sectionProps";
import renderTechs from "./renderTechs";
import renderBullets from "./renderBullets";

const ExperienceSection = ({ ref }: SectionProps) => {
  const renderExp = useCallback(() => {
    return experiences.map((exp, index) => {
      return (
        <div
          className="p-3 m1 print:m-0 print:p-0 print:pl-2 print:hover:shadow-none hover:shadow-xl hover:shadow-main transition duration-300 ease-in-out"
          key={`experience-${index}`}
        >
          <div className="flex justify-between">
            <h4>{exp.title}</h4>
            <div className="align-bottom print:text-sm">
              {exp.startDate} - {exp.endDate}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold print:text-sm">{exp.business}</div>
            <div className="print:text-sm">{exp.location}</div>
          </div>
          <span>
            <i className="text-sm print:text-xs print:hidden">
              {exp.description}
            </i>
          </span>
          <ul className="flex justify-left align-bottom mx-3 mt-1 print:m-0 print:mt-1 print:text-sm">
            <span className="mx-3">Technologies:</span>
            {exp.technologies.map(renderTechs(index))}
          </ul>
          <ul className="p-3 print:py-1 mr-5 print:ml-2 list-disc">
            {exp.tasks.map(renderBullets(index))}
          </ul>
        </div>
      );
    });
  }, []);

  return (
    <section ref={ref} id="experience">
      <h3>Experience</h3>
      <hr />
      {renderExp()}
    </section>
  );
};

export default ExperienceSection;
