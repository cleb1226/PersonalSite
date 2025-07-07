import { createContext, type RefObject } from "react";

export const HeaderRefContext =
  createContext<RefObject<HTMLElement | null> | null>(null);
