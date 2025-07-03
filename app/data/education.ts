export type educacationObj = {
  level: string;
  field: string;
  provider: string;
  finished: string;
  location: string;
};

const education: Array<educacationObj> = [
  {
    level: "Bachelor of Science",
    field: "IT",
    provider: "Purdue Global University",
    finished: "Summer 2027",
    location: "Remote",
  },
  {
    level: "Certificate",
    field: "Full Stack Web Development",
    provider: "Sabio School of Software Engineering",
    finished: "Sep 15 2022",
    location: "Remote",
  },
  {
    level: "Certificate",
    field: "Solidworks",
    provider: "Santa Monica College",
    finished: "Spring 2020",
    location: "Santa Monica, CA",
  },
  {
    level: "Certificate",
    field: "Game Design and 3-D Modeling",
    provider: "Southern California Refional Occupational Center (SCROC)",
    finished: "Summer 2016",
    location: "Torrance, CA",
  },
];

export default education;
