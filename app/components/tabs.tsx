import { styled, Tabs as MuiTabs } from "@mui/material";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  textColor?: "inherit" | "secondary" | "primary" | undefined;
  variant: "standard" | "scrollable" | "fullWidth" | undefined;
}

const Tabs = styled((props: StyledTabsProps) => <MuiTabs {...props} />)({
  "& .MuiTabs-indicator": {
    backgroundColor: "red",
  },
});

export default Tabs;
