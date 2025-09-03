import { useCallback } from "react";
import education from "~/data/education";
import type { SectionProps } from "./sectionProps";

const EducationSection = ({ ref }: SectionProps) => {
  const renderEducation = useCallback(() => {
    return education.map((edu, index) => (
      <div
        className="p-1 m-1 print:p-0 hover:shadow-xl hover:shadow-main transition duration-300 ease-in-out"
        key={`education-${index}`}
      >
        <div className="flex justify-between">
          <h4>
            {edu.level}, {edu.field}
          </h4>
          <span className="text-right print:text-sm">{edu.finished}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold print:text-sm">{edu.provider}</span>
        </div>
      </div>
    ));
  }, []);
  return (
    <section ref={ref} id="education">
      <h3>Education</h3>
      <hr />
      {renderEducation()}
    </section>
  );
};

export default EducationSection;
