import React from "react";
import Routes from "./routes/Routes";
import AppProvider from "./context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

const font = "'Open Sans', sans-serif";

const theme = createTheme({
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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
