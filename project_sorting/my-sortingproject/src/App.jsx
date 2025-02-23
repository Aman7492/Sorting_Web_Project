import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Algo from "./pages/Algo";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualize/:sortType" element={<Algo />} />
      </Routes>
    </Router>
  );
}

export default App;
