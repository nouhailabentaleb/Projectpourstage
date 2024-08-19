import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/blog";
import Contact from "./pages/Contact";
import Strategy from "./pages/services/stategy";
import Uxui from "./pages/services/uxui";
import Design from "./pages/services/design";
import Development from "./pages/services/development";
import Marketing from "./pages/services/Marketing";
import About from "./pages/about";
import Services from "./pages/services";
import "./index.css";

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/strategy" element={<Strategy />} />
        <Route path="/services/uxui" element={<Uxui />} />
        <Route path="/services/design" element={<Design />} />
        <Route path="/services/development" element={<Development />} />
        <Route path="/services/Marketing" element={<Marketing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
