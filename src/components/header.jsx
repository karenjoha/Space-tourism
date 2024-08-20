import React, { useState } from "react";
import '../styles/scss/header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__icon">
          <img src="../../public/logo.png" alt="logo" />
        </div>
        <div className={`nav_options ${isOpen ? "open" : ""}`}>
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
        <div className="hamburger" onClick={toggleMenu}>
          <img src="../../public/shared/icon-hamburger.svg" alt="menu icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
