import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../Menu.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="menu">
      <div className="menu-container">
        <div className="menu-logo">
          <Link to="/">Paula Thomas Therapy</Link>
        </div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className={`menu-items ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/insurances" onClick={() => setIsOpen(false)}>
              Insurances Accepted
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="menu-image-link">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img
                src={require("./../images/verified.png")}
                alt="Verified by Psychology Today"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
