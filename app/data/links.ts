import {
  faGithub,
  faLinkedin,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export type linkObj = {
  href: string;
  icon: IconDefinition;
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
];

export default links;
