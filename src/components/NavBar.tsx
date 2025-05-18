import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import LogoNavBar from ".././assets/images/Logo_NetMind2.png";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoNavBar} alt="Logo" />
        <h1>NETMIND</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/">Equipo</Link>
        </li>
        <li>
          <Link to="/">Participación</Link>
        </li>
        <li>
          <Link to="/">Colaboración</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
