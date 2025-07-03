import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
  type SyntheticEvent,
} from "react";
import { useNavigate } from "react-router";
import { styled, Tab, Tabs } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tabs, { type tabObj } from "../data/tabs";
import links, { type linkObj } from "../data/links";
import { faSun } from "@fortawesome/free-regular-svg-icons";

enum Theme {
  Dark = "dark",
  Light = "light",
}

const Header = (): ReactNode => {
  const navigate = useNavigate();

  const [tab, setTab] = useState(0);
  const [theme, setTheme] = useState<Theme>();

  const setRootTheme = (t: Theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.dataset.theme = t;
  };
  useLayoutEffect(() => {
    const initialTheme = localStorage.getItem("theme");
    let t;

    if (initialTheme) {
      t = initialTheme === Theme.Dark ? Theme.Dark : Theme.Light;
    } else {
      t = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? Theme.Dark
        : Theme.Light;
    }
    setTheme(t);
  }, []);
  useEffect(() => {
    if (theme) {
      setRootTheme(theme);
    }
  }, [theme]);

  const onTabChange = (e: SyntheticEvent, value: number) => {
    setTab(value);
    navigate(tabs[value].section);
  };
  const onThemeChange = () => {
    setTheme((prev) => {
      const targetTheme = prev === Theme.Dark ? Theme.Light : Theme.Dark;
      localStorage.setItem("theme", targetTheme);
      return targetTheme;
    });
  };

  interface StyledTabProps {
    label: string;
  }
  interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
    textColor?: "inherit" | "secondary" | "primary" | undefined;
    variant: "standard" | "scrollable" | "fullWidth" | undefined;
  }

  const CustomTabs = styled((props: StyledTabsProps) => <Tabs {...props} />)({
    "& .MuiTabs-indicator": {
      backgroundColor: "red",
    },
  });

  const CustomTab = styled((props: StyledTabProps) => <Tab {...props} />)(
    () => ({
      background:
        "radial-gradient(ellipse farthest-side at bottom,var(--hoverColor),transparent)",
    })
  );

  const renderTab = useCallback(
    () =>
      tabs.map((tab: tabObj, index: number) => (
        <CustomTab label={tab.name} key={`control-tab-${index}`} />
      )),
    []
  );
  const renderLinks = useCallback(
    () =>
      links.map((link: linkObj, index: number) => (
        <a
          title={link.title}
          href={link.href}
          target="_blank"
          key={`header-link-${index}`}
        >
          <FontAwesomeIcon
            className="mx-3 hover:text-main/80 transition-colors"
            icon={link.icon}
            size="2x"
          />
        </a>
      )),
    []
  );

  return (
    <header className="sticky top-0 right-0 left-0 z-10 px-4 pt-4 bg-white dark:bg-gray-950 shadow-xl/50 dark:shadow-main/50">
      <div className="flex w-full justify-between mb-5">
        <a
          href="#who"
          className="w-fit hover:text-main transition-colors duration-200 ease-in-out"
        >
          <h1 className="text-5xl font-extrabold">Caleb Ince</h1>
          <h2 className="text-4xl">Full Stack Software and DevOps Engineer</h2>
        </a>
        <div className="flex w-fit mt-2">
          {renderLinks()}
          <span title="Change Theme">
            <FontAwesomeIcon
              icon={faSun}
              size="2x"
              className="mx-3 hover:text-main/80 transition-colors"
              onClick={onThemeChange}
            />
          </span>
        </div>
      </div>
      <div className="w-full">
        <CustomTabs
          textColor="inherit"
          value={tab}
          onChange={onTabChange}
          variant="fullWidth"
        >
          {renderTab()}
        </CustomTabs>
      </div>
    </header>
  );
};
export default Header;
