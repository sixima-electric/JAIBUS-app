import React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import Sixima from "./pages/Sixima";
import About from "./pages/About";
import JAIST from "./pages/JAIST";
import JAIBUS from "./pages/JAIBUS";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/jaist" element={<JAIST />} />
      <Route path="/jaibus" element={<JAIBUS />} />
    </Routes>
  );
}

export default App;
