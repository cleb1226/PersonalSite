export type experienceObj = {
  title: string;
  business: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  tasks: Array<string>;
};

const experiences: Array<experienceObj> = [
  {
    title: "Software Engineer & Instructor",
    business: "Sabio School of Software Engineering",
    startDate: "Feb 2022",
    endDate: "June 2023",
    location: "Remote",
    description:
      "Sabio is a Web Development School meant to quickly teach students the fine details of programming,software engineering, and web development",
    tasks: [
      "Designed and built various functionality on the internal site meant to interface with students",
      "Implemented and maintained internal file system meant to manage student files using AWS",
      "Normalized and managed multiple in-house databases handling student work and information",
      "Created algorithmic tests to detect fraudulent student activity",
      "Led students daily in Agile/scrum style meetings to build out various projects",
      "Met daily with students to teach, fix problems, and provide feedback on coding projects",
    ],
  },
  {
    title: "Freelance Full Stack Web Developer",
    business: "Self",
    startDate: "2019",
    endDate: "2024",
    location: "Remote",
    description:
      "Client facing and personal projects both professionally and pro bono",
    tasks: [
      "Rebuilt Ausland Interiors front-end to be more appealing, responsive and mobile friendly (2024)",
      "Building a mobile app game in the style of Mafia with wacky roles (2024 ongoing)",
      "Developed early stages of a full stack site to streamline professional recruitment efforts (2023)",
      "Crafted a mobile rogue-lite deckbuilder in Unity (2023)",
      "Created an online multiplayer board game based off Tiny Epic Galaxies (2020)",
      "Designed a 2-D puzzle platformer with in-depth characterization and full key map rebinding (2019)",
    ],
  },
  {
    title: "Full Stack Web Developer",
    business: "Rosehip (nee Chamomile)",
    startDate: "Nov 2021",
    endDate: "Feb 2022",
    location: "Remote",
    description:
      "Rosehip is a wellness site meant to promote wholeness and connectivity. It focused on wholesome living through the sharing of medical and dietary practices",
    tasks: [
      "Deployed authentication and authorization systems using salt and hash cryptography",
      "Engineered and designed an adaptive survey system for admins to create custom surveys",
      "Implemented Role-Based Routing to dynamically allow access to certain pages",
    ],
  },
  {
    title: "Full Stack Web Developer",
    business: "WorldPrints",
    startDate: "Nov 2021",
    endDate: "Feb 2022",
    location: "Remote",
    description:
      "Worldprints is a t-shirt designing service meant to allow for customers to create custom t-shirts with a high degree of customizability",
    tasks: [
      "Managed systems that handle user shopping cart information and functionality",
      "Implemented Two-Factor Authentication systems meant to increase security",
      "Engineered email account verification",
    ],
  },
  {
    title: "IT Manager",
    business: "Ausland Interiors",
    startDate: "Feb 2017",
    endDate: "Nov 2019",
    location: "Redondo Beach",
    description:
      "Ausland Interiors is a Interior Design Company working on high end homes and design projects",
    tasks: [
      "Managed in office equipment and software, like internet, email systems, and other office supplies",
      "Set up new employees with needed materials and systems",
      "Handled employee tiered access to corporate software",
      "Implemented communication between various shop platforms to streamline user shopping experience",
    ],
  },
];

export default experiences;
