import React from "react";
import Routes from "./routes/Routes";
import AppProvider from "./context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#45A779",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffd600",
    },
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
