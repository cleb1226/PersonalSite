import { styled, Tabs as MuiTabs } from "@mui/material";

const Tabs = styled(MuiTabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "red",
  },
});

export default Tabs;
