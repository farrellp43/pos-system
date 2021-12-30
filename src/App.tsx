import React from "react";
import Routes from "./routes/Routes";
import AppProvider from "./context";
import "./App.css"

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
