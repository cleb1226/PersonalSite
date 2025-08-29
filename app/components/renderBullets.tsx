const renderBullets = (index: number) => {
  return (task: string, i: number) => (
    <li className="print:text-sm" key={`experience-${index}-task-${i}`}>
      {task}
    </li>
  );
};

export default renderBullets;
