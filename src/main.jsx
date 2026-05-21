import { Router } from "./router";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({ palette: { mode: "dark" } });

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>,
);
