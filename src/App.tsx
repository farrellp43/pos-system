import React from "react";
import Routes from "./routes/Routes";
import AppProvider from "./context";
import { CookiesProvider } from "react-cookie";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { idID } from "@mui/material/locale";
import "./App.css";

const font = "'Open Sans', sans-serif";

const theme = createTheme(
  {
    shape: {
      borderRadius: 8,
    },
    palette: {
      primary: {
        main: "#45A779",
        light: "#6AB893",
        dark: "#307454",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ffd600",
      },
    },
    typography: {
      fontFamily: font,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  },
  idID
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <AppProvider>
          <Routes />
        </AppProvider>
      </CookiesProvider>
    </ThemeProvider>
  );
}

export default App;
