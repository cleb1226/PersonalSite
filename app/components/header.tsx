import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
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
  const setRootTheme = (t: Theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.dataset.theme = t;
  };
  const getTheme = () => {
    const initialTheme = localStorage.getItem("theme");
    let t;

    if (initialTheme) {
      t = initialTheme === Theme.Dark ? Theme.Dark : Theme.Light;
    } else {
      t = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? Theme.Dark
        : Theme.Light;
    }
    setRootTheme(t);
    return t;
  };

  const [tab, setTab] = useState<Section>(Section.Skill);
  const [theme, setTheme] = useState<Theme>(getTheme());
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setRootTheme(theme);
  }, [theme]);
  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: 0.3,
      rootMargin: `-${headerRef?.current?.offsetHeight || 0}px 0px 25% 0px`,
    };
    const callback: IntersectionObserverCallback = (entries) => {
      setTab((prev) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          visible.sort(
            (a, b) => a.intersectionRect.height - b.intersectionRect.height
          );

          const currentTab = tabs.find(
            (t) => t.section === visible[0]?.target.id
          );
          if (currentTab && currentTab.sectionValue !== prev) {
            return currentTab.sectionValue;
          }
        }
        return prev;
      });
    };
    const observer = new IntersectionObserver(callback, options);
    const refs = [skillRef, expRef, eduRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [skillRef, expRef, eduRef]);

  const scrollOptions: ScrollIntoViewOptions = {
    behavior: "smooth",
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
      tabs.map((tab: tabObj, index: number) => {
        const onClick = () => {
          let targetRef: RefObject<HTMLElement | null>;
          switch (tab.sectionValue) {
            case Section.Skill:
            default:
              targetRef = skillRef;
              break;
            case Section.Exp:
              targetRef = expRef;
              break;
            case Section.Edu:
              targetRef = eduRef;
              break;
          }
          targetRef.current?.scrollIntoView(scrollOptions);
        };
        return (
          <Tab
            onClick={onClick}
            label={tab.name}
            key={`control-tab-${index}`}
          />
        );
      }),
    []
  );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 right-0 left-0 z-10 px-4 pt-4 bg-white dark:bg-gray-950 shadow-xl/50 dark:shadow-main/50"
    >
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
        <Tabs textColor="inherit" value={tab} variant="fullWidth">
          {renderTab()}
        </Tabs>
      </div>
    </header>
  );
};
export default Header;
