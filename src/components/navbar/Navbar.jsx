import React from "react";

export default function Navbar() {
  return (
    <header>
      <div className="navbar">
        <a href="#about">Aurrel Kondi</a>
      </div>
      <nav className="navbar">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Hire Me</a>
      </nav>
    </header>
  );
}
