import React from "react";
import "./navbar.css";
const NavBar = ({ items, onNavClick, activeLink }) => {
  return (
    <header>
      <nav className="container">
        <h2>THE PLANETS</h2>
        <ul>
          {items?.map((item) => (
            <li
              className={item === activeLink ? "active" : ""}
              onClick={() => onNavClick(item)}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
