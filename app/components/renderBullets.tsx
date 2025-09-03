const renderBullets = (index: number) => {
  return (task: string, i: number) => (
    <li
      className="print:text-xs print:[&:nth-child(n+3)]:hidden"
      key={`experience-${index}-task-${i}`}
    >
      {task}
    </li>
  );
};

export default renderBullets;
