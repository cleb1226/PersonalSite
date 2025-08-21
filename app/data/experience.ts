export type experienceObj = {
  title: string;
  business: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  tasks: Array<string>;
  technologies: Array<string>;
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
      "Designed student interface and backend to improve communication with students",
      "Automated file intake system and management using AWS Lambda and S3 Buckets to streamline student onboarding",
      "Normalized and managed T-SQL databases to decrease call time by 40%",
      "Created algorithmic tests to track and detect fraudulent student hours using Wakatime",
      "Met daily with students to teach, fix problems, and provide feedback on coding projects to promote student success",
      "Used Signalr to implemented a real-time update system to ensure rapid response to student questions",
    ],
    technologies: [
      "ReactJS",
      "DOTNET",
      "T-SQL",
      "AWS Lambda",
      "AWS S3",
      "SignalR",
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
      "Building a mafia style mobile app in react native and a dotnet backend (2024 ongoing)",
      "Created an online multiplayer board game based off Tiny Epic Galaxies using GameMaker Studio (2020)",
      "Build the engine for a 2-D puzzle platformer with in-depth characterization and full key map rebinding (2019)",
    ],
    technologies: ["Wix", "React Native", "Unity", "Gamemaker Studio 2"],
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
      "Created login and security system from scratch for authentication and authorization using salt and hash cryptography",
      "Engineered and designed an adaptive survey system for admins to create custom surveys",
      "Implemented Role-Based Routing to dynamically allow or restrict access to certain pages for specific users to improve security",
    ],
    technologies: ["React", "DOTNET", "T-SQL", "BCrypt"],
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
      "Created system to track users cart information using web cookies to improve checkout pipeline",
      "Implemented Two-Factor Authentication systems meant to increase security",
      "Engineered email account verification to ensure user validity",
    ],
    technologies: ["React", "DOTNET", "T-SQL", "Web Cookies"],
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
      "Managed in office equipment and software, like internet, email systems, and other office supplies, to keep the office organized",
      "Decreased onboarding time by setting up new employees with needed materials and systems",
      "Handled employee tiered access to corporate software to promote principle of least privilege",
      "Implemented communication between various shop platforms. like Wix Marketplace and Facebook Marketplace, to streamline user shopping experience",
    ],
    technologies: ["Wix", "Facebook Marketplace"],
  },
];

export default experiences;
