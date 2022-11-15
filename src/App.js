import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar/Navbar";
import Home from "./Home";
import About from './About';
import Blogs from "./Blogs";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route  path="/" element={<Home />}></Route>
          <Route  path="about" element={<About />}></Route>
          <Route  path="blogs" element={<Blogs />}></Route>
          <Route path="*" element={<p>err</p>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
