import { createTheme, type Breakpoints } from "@mui/material";

let breakpoints: Breakpoints | null = null;

const getBreakpoints = () => {
  if (!!breakpoints) return breakpoints;

  const styles = getComputedStyle(document.documentElement);
  const fontSize = parseInt(styles.fontSize) || 0;
  const { breakpoints: bp } = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: parseInt(styles.getPropertyValue("--breakpoint-sm")) * fontSize,
        md: parseInt(styles.getPropertyValue("--breakpoint-md")) * fontSize,
        lg: parseInt(styles.getPropertyValue("--breakpoint-lg")) * fontSize,
        xl: 1536,
      },
    },
  });

  breakpoints = bp;

  return breakpoints;
};

export default getBreakpoints;
