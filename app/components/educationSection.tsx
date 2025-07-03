import { useCallback, type RefObject } from "react";
import education from "~/data/education";

interface EduProps {
  eduRef: RefObject<HTMLElement | null>;
}

const EducationSection = ({ eduRef }: EduProps) => {
  const renderEducation = useCallback(() => {
    return education.map((edu, index) => (
      <div
        className="p-1 m-1 hover:shadow-xl hover:shadow-main transition duration-300 ease-in-out"
        key={`education-${index}`}
      >
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">
            {edu.level}, {edu.field}
          </h3>
          <span>{edu.finished}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">{edu.provider}</span>
          <span>{edu.location}</span>
        </div>
      </div>
    ));
  }, []);
  return (
    <section ref={eduRef} id="education" className="mt-3">
      <h3 className="text-3xl font-bold">Education</h3>
      <hr />
      {renderEducation()}
    </section>
  );
};

export default EducationSection;
