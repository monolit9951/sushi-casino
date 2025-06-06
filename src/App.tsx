import Home from "./pages/home/Home.tsx";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import PrizePage from "./pages/prize/prize.tsx";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/prize" Component={PrizePage}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
