import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="hamburger">
      <div className={`navbar ${isOpen ? "open" : ""}`}>
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
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
