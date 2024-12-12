import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Vereadores from "./pages/Vereadores";
import Prefeitura from "./pages/Prefeitura";
import Forum from "./pages/Forum";
import Contato from "./pages/Contato";

const App = () => {
  return (
    <Router>
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vereadores" element={<Vereadores />} />
          <Route path="/prefeitura" element={<Prefeitura />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
