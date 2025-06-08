import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar-container">
      <button
        className="hamburger-button"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      <div className={`navbar${isOpen ? " open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/insurances" onClick={toggleMenu}>
          Insurances Accepted
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact Me
        </Link>
        <div className="verified">
          <a
            href="https://www.psychologytoday.com/profile/1270828"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./../images/verified.png")}
              alt="Verified by Psychology Today"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
