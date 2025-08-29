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
            <h3 className="text-2xl font-semibold print:text-base">
              {exp.title}
            </h3>
            <div className="align-bottom print:text-sm">
              {exp.startDate} - {exp.endDate}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold print:text-sm">{exp.business}</div>
            <div className="print:text-sm">{exp.location}</div>
          </div>
          <span>
            <i className="text-sm print:text-xs">{exp.description}</i>
          </span>
          <ul className="flex justify-left align-bottom mx-3 mt-1 print:m-0 print:mt-1 print:text-sm">
            <span className="mx-3">Technologies:</span>
            {exp.technologies.map(renderTechs(index))}
          </ul>
          <ul className="p-3 mr-5 print:ml-2 list-disc">
            {exp.tasks.map(renderBullets(index))}
          </ul>
        </div>
      );
    });
  }, []);

  return (
    <section ref={ref} id="experience" className="mt-3">
      <h3 className="text-3xl font-bold print:text-lg">Experience</h3>
      <hr />
      {renderExp()}
    </section>
  );
};

export default ExperienceSection;
