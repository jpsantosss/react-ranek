import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Produto from "./pages/Produto";
import Header from "./layout/Header";
import "./css/global/Global.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produto/:id" element={<Produto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
