import Home from "./pages/home/Home.tsx";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/themes.ts";

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
