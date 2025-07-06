import {
  faGithub,
  faLinkedin,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export type linkObj = {
  href?: string;
  icon: IconDefinition;
  iconFunction?: (bool: boolean) => IconDefinition;
  title: string;
};

const links: Array<linkObj> = [
  { href: "mailto:calebince1226@gmail.com", icon: faEnvelope, title: "Email" },
  {
    href: "https://www.linkedin.com/in/calebince/",
    icon: faLinkedin,
    title: "LinkedIn",
  },
  { href: "https://github.com/cleb1226", icon: faGithub, title: "Github" },
  {
    iconFunction: (bool) => (bool ? faMoon : faSun),
    title: "Change Theme",
    icon: faMoon,
  },
];

export default links;
