import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import links, { type linkObj } from "~/data/links";
import Theme from "~/enums/theme";

interface HeaderLinksProps {
  onThemeChange: () => void;
  currentTheme?: Theme;
}

const HeaderLinks = ({ onThemeChange, currentTheme }: HeaderLinksProps) => {
  const renderLinks = useCallback(
    () =>
      links.map((link: linkObj, index: number) => (
        <a
          title={link.title}
          href={link.href}
          target="_blank"
          key={`header-link-${index}`}
          className="flex justify-center my-2 sm:mx-3"
        >
          <FontAwesomeIcon
            className="hover:text-main/80 transition-colors"
            icon={link.icon}
            size="2x"
          />
        </a>
      )),
    []
  );

  return (
    <div className="flex flex-col sm:flex-row w-10 sm:w-fit">
      {renderLinks()}
      <span
        title="Change Theme"
        className="flex justify-center my-2 sm:mx-3 cursor-pointer"
      >
        <FontAwesomeIcon
          icon={currentTheme === Theme.Dark ? faMoon : faSun}
          size="2x"
          className="hover:text-main/80 transition-colors"
          onClick={onThemeChange}
        />
      </span>
    </div>
  );
};

export default HeaderLinks;
