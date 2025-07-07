import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
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
import type { InViewHookResponse } from "react-intersection-observer";

interface HeaderProps {
  skillInView: InViewHookResponse;
  expInView: InViewHookResponse;
  eduInView: InViewHookResponse;
  skillRef: RefObject<HTMLElement | null>;
  expRef: RefObject<HTMLElement | null>;
  eduRef: RefObject<HTMLElement | null>;
}

const Header = ({
  skillInView,
  expInView,
  eduInView,
  skillRef,
  expRef,
  eduRef,
}: HeaderProps): ReactNode => {
  const [tab, setTab] = useState<Section>(Section.Skill);
  const [theme, setTheme] = useState<Theme>();
  const headerRef = useRef<HTMLElement | null>(null);

  const root = document.getElementsByTagName("html")[0];
  const setRootTheme = (t: Theme) => {
    root.dataset.theme = t;
  };
  useLayoutEffect(() => {
    root.className = headerRef.current?.offsetHeight
      ? `scroll-pt-[${headerRef.current?.offsetHeight}px]`
      : "";
  }, [headerRef.current?.offsetHeight]);
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
      threshold: 0.2,
      rootMargin: `-${headerRef?.current?.offsetHeight || 0}px 0px 0px -25%`,
    };
    const callback: IntersectionObserverCallback = (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length > 0) {
        setTab((prev) => {
          visible.sort(
            (a, b) => b.boundingClientRect.bottom - a.boundingClientRect.bottom
          );

          const currentTab = tabs.find(
            (t) => t.section === visible[0]?.target.id
          );
          if (currentTab && currentTab.sectionValue !== prev) {
            return currentTab.sectionValue;
          }
          return prev;
        });
      }
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
          // let targetRef: InViewHookResponse | null = null;
          let targetRef: RefObject<HTMLElement | null>;
          switch (tab.sectionValue) {
            case Section.Skill:
            default:
              // targetRef = skillInView;
              targetRef = skillRef;
              break;
            case Section.Exp:
              // targetRef = expInView;
              targetRef = expRef;
              break;
            case Section.Edu:
              // targetRef = eduInView;
              targetRef = eduRef;
              break;
          }
          targetRef.current?.scrollIntoView(scrollOptions);
          // targetRef?.entry?.target.scrollIntoView(scrollOptions);
        };
        return (
          <Tab
            onClick={onClick}
            label={tab.name}
            key={`control-tab-${index}`}
          />
        );
      }),
    [skillInView, expInView, eduInView]
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
