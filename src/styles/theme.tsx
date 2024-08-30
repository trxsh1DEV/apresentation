import { Theme, useTheme } from "@/components/ui/theme-provider";
import { createTheme } from "@mui/material";

// eslint-disable-next-line
export const tableTheme = (mode: Theme = useTheme().theme || "dark") => {
  if (mode === "system") {
    mode = "dark";
  }
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#d57cd8",
      },
    },
  });
};
