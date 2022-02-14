import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./component/HeaderNavbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
