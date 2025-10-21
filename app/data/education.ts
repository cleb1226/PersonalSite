export type educacationObj = {
  level: string;
  field: string;
  provider: string;
  finished: string;
};

const education: Array<educacationObj> = [
  // {
  //   level: "Bachelor of Science",
  //   field: "IT, Excel Track (Self-Paced)",
  //   provider: "Purdue Global University",
  //   finished: "Summer 2027",
  // },
  {
    level: "Certificate",
    field: "Full Stack Web Development",
    provider: "Sabio School of Software Engineering",
    finished: "Winter 2022",
  },
  {
    level: "Certificate",
    field: "Solidworks",
    provider: "Santa Monica College",
    finished: "Spring 2020",
  },
  {
    level: "Certificate",
    field: "Game Design and 3-D Modeling",
    provider: "Southern California Refional Occupational Center (SCROC)",
    finished: "Summer 2016",
  },
];

export default education;
