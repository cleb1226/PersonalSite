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
      links.map((link: linkObj, index: number) => {
        const icon = (
          <FontAwesomeIcon
            className="hover:text-main/80 transition-colors"
            icon={
              link.iconFunction
                ? link?.iconFunction(currentTheme === Theme.Dark)
                : link.icon
            }
            onClick={!!!link.href ? onThemeChange : undefined}
          />
        );
        const className =
          "flex justify-center text-lg sm:text-4xl my-1 sm:mx-3 cursor-pointer";
        const key = `header-link-${link.title}-${index}`;
        if (!!!link.href) {
          return (
            <span key={key} title={link.title} className={className}>
              {icon}
            </span>
          );
        }
        return (
          <a
            title={link.title}
            href={link.href}
            target="_blank"
            key={key}
            className={className}
          >
            {icon}
          </a>
        );
      }),
    []
  );

  return (
    <div className="flex flex-col sm:flex-row w-10 sm:w-fit">
      {renderLinks()}
    </div>
  );
};

export default HeaderLinks;
