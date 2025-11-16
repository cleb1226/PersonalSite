import type { freelanceObj } from "~/data/experience";

const renderBullets = (index: number) => {
  return (task: string | freelanceObj, i: number) => {
    if (typeof task === "string") {
      return (
        <li
          className="print:text-xs print:[&:nth-child(n+4)]:hidden"
          key={`experience-${index}-task-${i}`}
        >
          {task}
        </li>
      );
    } else {
      return (
        <li className="print:text-xs" key={`experience-${index}-task-${i}`}>
          <span className="font-bold">{task.business}</span> - {task.field} -{" "}
          {task.goal}
          <ul className="list-[circle]">
            {task.tasks.map((t) => (
              <li>{t}</li>
            ))}
          </ul>
        </li>
      );
    }
  };
};

export default renderBullets;
