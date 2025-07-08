import {
  useCallback,
  useEffect,
  useMemo,
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

const screenHeight = window.visualViewport?.height || 0;
const screenThreshold = screenHeight * 0.1;

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

  const [tab, setTab] = useState<IntersectionObserverEntry | null>(null);
  const tabNumber = useMemo<Section>(() => {
    const ct = tabs.find((t) => t.section === tab?.target.id);
    if (ct) {
      return ct.sectionValue;
    }
    return Section.Skill;
  }, [tab]);
  const [theme, setTheme] = useState<Theme>(getTheme());
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setRootTheme(theme);
  }, [theme]);
  useEffect(() => {
    const rootMarginTop = headerRef?.current?.offsetHeight || 0;
    const options: IntersectionObserverInit = {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: `-${rootMarginTop + 100}px 0px 0px 0px`,
    };
    const callback: IntersectionObserverCallback = (entries) => {
      setTab((prev) => {
        const visible = entries.filter(
          (entry) =>
            entry.isIntersecting &&
            entry.intersectionRect.height > screenThreshold
        );
        if (visible.length > 0) {
          visible.sort(
            (a, b) => a.intersectionRect.bottom - b.intersectionRect.bottom
          );
          const nextTab = visible[0];
          const curTabHeight = prev?.intersectionRect.height || 0;

          if (
            (prev?.target.id !== nextTab.target.id &&
              curTabHeight < nextTab.intersectionRect.height) ||
            prev?.target.id === nextTab.target.id
          ) {
            return nextTab;
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
  }, [skillRef, expRef, eduRef, headerRef]);

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
        <Tabs textColor="inherit" value={tabNumber} variant="fullWidth">
          {renderTab()}
        </Tabs>
      </div>
    </header>
  );
};
export default Header;
