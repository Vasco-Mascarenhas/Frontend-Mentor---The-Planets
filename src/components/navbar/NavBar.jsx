import React from "react";
import "./navbar.css";
const NavBar = ({ items, onNavClick }) => {
  return (
    <header>
      <nav className="container">
        <h2>THE PLANETS</h2>
        <ul>
          {items?.map((item) => (
            <li onClick={() => onNavClick(item)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
