import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
  type RefObject,
  type SyntheticEvent,
} from "react";
import tabs, { type tabObj } from "../data/tabs";
import Tab from "./tab";
import Tabs from "./tabs";
import Section from "~/enums/section";
import Theme from "~/enums/theme";
import HeaderLinks from "./headerLinks";

interface HeaderProps {
  skillRef: RefObject<HTMLElement | null>;
  expRef: RefObject<HTMLElement | null>;
  eduRef: RefObject<HTMLElement | null>;
}

const Header = ({ skillRef, expRef, eduRef }: HeaderProps): ReactNode => {
  const [tab, setTab] = useState<Section>(Section.Skill);
  const [theme, setTheme] = useState<Theme>();

  const setRootTheme = (t: Theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.dataset.theme = t;
  };
  const onEntry = useCallback((section: Section) => {
    return (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setTab(section);
      }
    };
  }, []);
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
  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: 0.25,
    };
    const skillObserver = new IntersectionObserver(
      onEntry(Section.Skill),
      options
    );
    const expObserver = new IntersectionObserver(onEntry(Section.Exp), options);
    const eduObserver = new IntersectionObserver(onEntry(Section.Edu), options);
    if (skillRef.current) {
      skillObserver.observe(skillRef.current);
    }
    if (expRef.current) {
      expObserver.observe(expRef.current);
    }
    if (eduRef.current) {
      eduObserver.observe(eduRef.current);
    }
  }, []);

  const scrollOptions: ScrollIntoViewOptions = {
    behavior: "smooth",
  };

  const onTabChange = (e: SyntheticEvent, value: number) => {
    switch (value) {
      case Section.Skill:
      default:
        skillRef.current?.scrollIntoView(scrollOptions);
        break;
      case Section.Exp:
        expRef.current?.scrollIntoView(scrollOptions);
        break;
      case Section.Edu:
        eduRef.current?.scrollIntoView(scrollOptions);
        break;
    }
  };
  const onThemeChange = () => {
    setTheme((prev) => {
      const targetTheme = prev === Theme.Dark ? Theme.Light : Theme.Dark;
      localStorage.setItem("theme", targetTheme);
      return targetTheme;
    });
  };
  const onHeaderPress = useCallback(() => {
    window.scroll({ top: 0, ...scrollOptions });
  }, []);

  const renderTab = useCallback(
    () =>
      tabs.map((tab: tabObj, index: number) => (
        <Tab label={tab.name} key={`control-tab-${index}`} />
      )),
    []
  );

  return (
    <header className="sticky top-0 right-0 left-0 z-10 px-4 pt-4 bg-white dark:bg-gray-950 shadow-xl/50 dark:shadow-main/50">
      <div className="flex flex-nowrap flex-row justify-between w-full mb-5">
        <button
          onClick={onHeaderPress}
          className="sm:w-fit text-left cursor-pointer hover:text-main transition-colors duration-200 ease-in-out"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold">Caleb Ince</h1>
          <h2 className="text-2xl sm:text-4xl">
            Full Stack Software and DevOps Engineer
          </h2>
        </button>
        <div className="flex">
          <HeaderLinks currentTheme={theme} onThemeChange={onThemeChange} />
        </div>
      </div>
      <div className="w-full">
        <Tabs
          textColor="inherit"
          value={tab}
          onChange={onTabChange}
          variant="fullWidth"
        >
          {renderTab()}
        </Tabs>
      </div>
    </header>
  );
};
export default Header;
