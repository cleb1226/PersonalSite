import { styled, Tab as MuiTab } from "@mui/material";

interface StyledTabProps {
  label: string;
}

const Tab = styled((props: StyledTabProps) => <MuiTab {...props} />)(() => ({
  background:
    "radial-gradient(ellipse farthest-side at bottom,var(--hoverColor),transparent)",
}));

export default Tab;
