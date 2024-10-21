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
    // primary: {
    // main: "#3f51b5",
    // },
    secondary: {
      main: "#d57cd8",
    },
    warning: {
      main: "#fc9118",
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "16px", // Tamanho da fonte para todas as células
        },
        head: {
          fontSize: "16px", // Tamanho da fonte no cabeçalho
          fontWeight: "bold", // Fonte forte no cabeçalho
          fontFamily: "sans-serif", // Alterar font-family no cabeçalho
        },
      },
    },
    // MuiTableRow: {
    //   styleOverrides: {
    //     root: {
    //       "&:nth-of-type(odd)": {
    //         backgroundColor: "#b700ff", // Cor para linhas ímpares
    //       },
    //       "&:nth-of-type(even)": {
    //         backgroundColor: "#ffffff", // Cor para linhas pares
    //       },
    //     },
    //   },
    // },
    MuiTableBody: {
      styleOverrides: {
        // root: {
        //   "& tr:nth-of-type(odd) > td": {
        //     backgroundColor: "#3f3f3f",
        //   },
        // },
      },
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
