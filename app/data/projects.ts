export type projectObj = {
  title: string;
  business: string;
  tasks: Array<string>;
  technologies: Array<string>;
};

const projects: Array<projectObj> = [
  {
    title: "Full Stack Web Developer",
    business: "Rosehip (nee Chamomile)",
    tasks: [
      "Created login and security system from scratch for authentication and authorization using salt and hash cryptography",
      "Engineered and designed an adaptive survey system for admins to create custom surveys",
      "Implemented Role-Based Routing to dynamically allow or restrict access to certain pages for specific users to improve security",
    ],
    technologies: ["React", "DOTNET", "T-SQL", "BCrypt"],
  },
  {
    title: "Full Stack Web Developer",
    business: "WorldPrints",
    tasks: [
      "Created system to track users cart information using web cookies to improve checkout pipeline",
      "Implemented Two-Factor Authentication systems meant to increase security",
      "Engineered email account verification to ensure user validity",
    ],
    technologies: ["React", "DOTNET", "T-SQL", "Web Cookies"],
  },
  {
    title: "Website Manager",
    business: "Ausland Interiors",
    tasks: [
      "Redesigned Ausland Interiors front-end to be more appealing, responsive and mobile friendly",
      "Worked closely with a team and the client to ensure the new design fit the business",
    ],
    technologies: ["Wix", "React Native", "Unity", "Gamemaker Studio 2"],
  },
];

export default projects;
