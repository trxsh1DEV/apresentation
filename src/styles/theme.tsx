import { Theme } from "@/components/ui/theme-provider";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import {
  ThemeProvider as CustomThemeProvider,
  useTheme,
} from "@/components/ui/theme-provider";
// import { useMemo } from "react";

// Função para criar o tema com base no modo
// eslint-disable-next-line react-refresh/only-export-components
export const createTableTheme = (mode: Theme): ThemeOptions => ({
  palette: {
    mode: mode === "system" ? "light" : mode, // Ajuste conforme necessário
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#d57cd8",
    },
    warning: {
      main: "#e2eb34",
    },
  },
});

export const CombinedThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useTheme();

  // Verifica se o tema é "system" e define como "dark" ou "light" baseado nas preferências do sistema
  const resolvedTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  // Cria o tema com base no tema resolvido
  const muiTheme = createTheme(createTableTheme(resolvedTheme));

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};

export const RootThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <CustomThemeProvider>
      <CombinedThemeProvider>{children}</CombinedThemeProvider>
    </CustomThemeProvider>
  );
};
