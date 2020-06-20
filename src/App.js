import React from "react";
import logo from "./logo.jpg";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import OApp from "./EzyAgriComponents/navigation";

const theme = {
  roundness: 2,
  colors: {
    primary: "#556B2F",
    accent: "#32CD32",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <OApp />
    </ThemeProvider>
  );
}

export default App;
