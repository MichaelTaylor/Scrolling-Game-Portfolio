import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="home" smooth={true}>
          Home
        </Link>
        <Link to="projects" smooth={true}>
          Projects
        </Link>
        <Link to="about" smooth={true}>
          About
        </Link>
        <Link to="contact" smooth={true}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
