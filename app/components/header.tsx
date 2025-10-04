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
import Section from "~/enums/section";
import Theme from "~/enums/theme";
import HeaderLinks from "./headerLinks";
import { Tabs, useMediaQuery } from "@mui/material";
import getBreakpoints from "./theme";

interface HeaderProps {
  skillRef: RefObject<HTMLElement | null>;
  expRef: RefObject<HTMLElement | null>;
  projRef: RefObject<HTMLElement | null>;
  eduRef: RefObject<HTMLElement | null>;
}

const breakpoints = getBreakpoints();

const Header = ({
  skillRef,
  expRef,
  eduRef,
  projRef,
}: HeaderProps): ReactNode => {
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

  const isMd = useMediaQuery(breakpoints.down("md"));
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
      threshold: [
        0, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
        1,
      ],
      rootMargin: `-${rootMarginTop}px 0px 0px 0px`,
    };
    const callback: IntersectionObserverCallback = (entries) => {
      setTab((prev) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const nextTab = visible[0];
          const curTabHeight = prev?.intersectionRect.height || 0;
          const curTabRatio = prev?.intersectionRatio || 0;
          const curComparison = isMd ? curTabHeight : curTabRatio;
          const nextComparison = isMd
            ? nextTab.intersectionRect.height
            : nextTab.intersectionRatio;

          if (
            nextTab.intersectionRatio > 0.8 ||
            nextTab.target.id === prev?.target.id ||
            nextComparison > curComparison
          ) {
            return nextTab;
          }
        }
        return prev;
      });
    };
    const observer = new IntersectionObserver(callback, options);
    const refs = [skillRef, expRef, projRef, eduRef];
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
            case Section.Proj:
              targetRef = projRef;
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
            label={isMd && !!tab.shortName ? tab.shortName : tab.name}
            key={`control-tab-${index}`}
            classes={{
              root: "[--hoverColor:transparent] transition-[--hoverColor] duration-300 ease-in-out !text-xs md:!text-sm",
            }}
          />
        );
      }),
    [isMd]
  );

  return (
    <header
      ref={headerRef}
      className="sticky print:relative top-0 right-0 left-0 z-10 px-4 pt-4 bg-white dark:bg-gray-950 shadow-xl/50 dark:shadow-main/50 print:shadow-main/50"
    >
      <div className="flex flex-nowrap flex-row justify-between w-full mb-5 print:mb-1">
        <button
          onClick={onHeaderPress}
          className="sm:w-fit text-left cursor-pointer hover:text-main transition-colors duration-200 ease-in-out"
        >
          <h1 className="text-3xl print:text-lg sm:text-5xl font-extrabold">
            Caleb Ince
          </h1>
          <h2 className="text-2xl print:text-base sm:text-4xl">
            Full Stack Software and DevOps Engineer
          </h2>
        </button>
        <div className="flex print:hidden">
          <HeaderLinks currentTheme={theme} onThemeChange={onThemeChange} />
        </div>
      </div>
      <div className="w-full print:hidden">
        <Tabs
          slotProps={{
            indicator: { className: "!bg-(--color-main)" },
          }}
          textColor="inherit"
          value={tabNumber}
          variant="fullWidth"
          allowScrollButtonsMobile
        >
          {renderTab()}
        </Tabs>
      </div>
    </header>
  );
};
export default Header;
