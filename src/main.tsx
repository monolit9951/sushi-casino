import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/colors.ts";
=======
import "./index.scss";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/themes.ts";
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
