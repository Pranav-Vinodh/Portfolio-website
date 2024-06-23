import { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router";
import Layout from "./components/layouts";
import Home from "./components/Home";
import About from "./components/about";
import Contact from "./components/contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
