import React from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
