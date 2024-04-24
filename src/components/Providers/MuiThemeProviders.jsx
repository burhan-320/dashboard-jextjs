import { ThemeProvider, createTheme } from "@mui/material";
import { useTheme } from "next-themes";

const createMuiTheme = () => {
  //   const newMode = "";
  return createTheme({
    palette: {
      //   mode: newMode,
      primary: {
        main: "#000000",
      },
    },
  });
};

const MuiThemeProviders = ({ children }) => {
  const theme = useTheme();

  const muiTheme = createMuiTheme(theme);

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProviders;
