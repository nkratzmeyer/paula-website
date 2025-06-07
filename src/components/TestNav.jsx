import React, { useState } from "react";
import { Link } from "react-router-dom";

const TestNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="test-navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/services" onClick={toggleMenu}>
          Services
        </Link>
        <Link to="/insurances" onClick={toggleMenu}>
          Insurances Accepted
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default TestNav;
