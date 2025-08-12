import { useCallback, type RefObject } from "react";
import experiences from "~/data/experience";

interface ExpProps {
  expRef: RefObject<HTMLElement | null>;
}

const ExperienceSection = ({ expRef }: ExpProps) => {
  const renderExp = useCallback(() => {
    return experiences.map((exp, index) => {
      const renderBullets = (task: string, i: number) => (
        <li key={`experience-${index}-task-${i}`}>{task}</li>
      );
      const renderTechs = (techs: string, i: number) => (
        <li className="list-none mx-3" key={`experience-${index}-tech-${i}`}>
          - {techs}
        </li>
      );
      return (
        <div
          className="p-3 m1 hover:shadow-xl hover:shadow-main transition duration-300 ease-in-out"
          key={`experience-${index}`}
        >
          <div className="flex justify-between">
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <div className="align-bottom">
              {exp.startDate} - {exp.endDate}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">{exp.business}</div>
            <div>{exp.location}</div>
          </div>
          <span>
            <i className="text-sm">{exp.description}</i>
          </span>
          <div className="flex">
            <ul className="flex justify-center align-bottom mx-3 mt-1 ">
              <span className="mx-3">Technologies:</span>
              {exp.technologies.map(renderTechs)}
            </ul>
          </div>
          <ul className="p-3 mr-5 list-disc">{exp.tasks.map(renderBullets)}</ul>
        </div>
      );
    });
  }, []);

  return (
    <section ref={expRef} id="experience" className="mt-3">
      <h3 className="text-3xl font-bold">Experience</h3>
      <hr />
      {renderExp()}
    </section>
  );
};

export default ExperienceSection;
