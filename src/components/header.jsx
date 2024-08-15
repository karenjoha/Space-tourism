import React from "react";
import '../styles/scss/header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div>
        <span className="logo">
          <img src="../../public/logo.png" alt="logo" />
        </span>
        </div>
        <div className="nav_options">
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <strong>00 </strong>
            <a href="/home">HOME</a>
          </li>
          <li className="navbar__menu-item">
            <strong>01 </strong>
            <Link to="/destination">DESTINATION</Link>
          </li>
          <li className="navbar__menu-item">
            <strong>02 </strong>
            <a href="/crew">CREW</a>
          </li>
          <li className="navbar__menu-item">
            <strong>03 </strong>
            <a href="/technology">TECHNOLOGY</a>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;