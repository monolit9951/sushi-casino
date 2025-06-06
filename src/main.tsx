import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/themes.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
