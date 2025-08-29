const renderTechs = (index: number) => {
  return (techs: string, i: number) => (
    <li className="list-none mx-3" key={`experience-${index}-tech-${i}`}>
      - {techs}
    </li>
  );
};

export default renderTechs;
