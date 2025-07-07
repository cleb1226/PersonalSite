import { styled, Tab as MuiTab } from "@mui/material";

const Tab = styled(MuiTab)(() => ({
  background:
    "radial-gradient(ellipse farthest-side at bottom,var(--hoverColor),transparent)",
}));

export default Tab;
