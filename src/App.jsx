import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home";
import "./App.css";
import Started from "./pages/getStarted/getStarted";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/started" element={<Started />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
