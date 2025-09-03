import { useCallback } from "react";
import type { SectionProps } from "./sectionProps";
import projects from "~/data/projects";
import renderTechs from "./renderTechs";
import renderBullets from "./renderBullets";

const ProjectsSection = ({ ref }: SectionProps) => {
  const renderProj = useCallback(() => {
    return projects.map((exp, index) => {
      return (
        <div
          className="p-3 m1 print:m-0 print:p-0 print:pl-2 print:hover:shadow-none hover:shadow-xl hover:shadow-main transition duration-300 ease-in-out"
          key={`experience-${index}`}
        >
          <div className="flex justify-between">
            <h4>{exp.business}</h4>
            <h5 className="text-xl align-bottom print:text-sm">{exp.title}</h5>
          </div>
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
    <section ref={ref} id="projects">
      <h3>Professional Projects</h3>
      <hr />
      {renderProj()}
    </section>
  );
};

export default ProjectsSection;
