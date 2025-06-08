import Home from "./pages/home/Home.tsx";
import "./index.scss";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";

// const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Header />  
      <Home />
      <Footer />
    </div>
  );
}

export default App;
