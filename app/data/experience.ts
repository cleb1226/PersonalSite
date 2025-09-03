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
      "Normalized and managed T-SQL databases to decrease call time by 40%",
      "Automated file intake system and management using AWS Lambda and S3 Buckets to streamline student onboarding",
      "Used Signalr to implemented a real-time update system to ensure rapid response to student questions",
      "Designed student interface and backend to improve communication with students",
      "Created algorithmic tests to track and detect fraudulent student hours using Wakatime",
      "Met daily with students to teach, fix problems, and provide feedback on coding projects to promote student success",
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
    title: "IT Manager",
    business: "Ausland Interiors",
    startDate: "Feb 2017",
    endDate: "Nov 2019",
    location: "Redondo Beach",
    description:
      "Ausland Interiors is a Interior Design Company working on high end homes and design projects",
    tasks: [
      "Implemented communication between various shop platforms. like Wix Marketplace and Facebook Marketplace, to streamline user shopping experience",
      "Handled employee tiered access to corporate software to promote principle of least privilege",
      "Managed in office equipment and software, like internet, email systems, and other office supplies, to keep the office organized",
      "Decreased onboarding time by setting up new employees with needed materials and systems",
    ],
    technologies: ["Wix", "Facebook/Meta Marketplace", "Wix Marketplace"],
  },
];

export default experiences;
