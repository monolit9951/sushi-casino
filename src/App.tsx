import Home from "./pages/Home.tsx";
<<<<<<< HEAD
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/colors.ts";
=======
import "./index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/themes.ts";
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/*<Header />*/}
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
