import React, { useState } from "react";
import "./navbar.css";

const NavBar = ({ items, onNavClick, activeLink }) => {
  const navLinkColor = [
    { name: "Mercury", color: "var(--lightBlue)" },
    { name: "Venus", color: "var(--yellow)" },
    { name: "Earth", color: "var(--purple)" },
    { name: "Mars", color: "var(--lightRed)" },
    { name: "Jupiter", color: "var(--red)" },
    { name: "Saturn", color: "var(--orange)" },
    { name: "Uranus", color: "var(--green)" },
    { name: "Neptune", color: "var(--blue)" },
  ];
  const [active, setActive] = useState(false);

  const handleBurguer = () => {
    setActive(!active);
  };

  const handleClose = () => {
    setActive(false);
  };

  return (
    <header>
      <nav className="container">
        <div className="title">
          <h2>THE PLANETS</h2>
          <div className="burguer">
            <span
              onClick={handleBurguer}
              style={{ display: !active ? "block" : "none" }}
            >
              burguer
            </span>
            <span
              onClick={handleClose}
              style={{ display: !active ? "none" : "block" }}
            >
              notburguer
            </span>
          </div>
        </div>
        <ul style={{ display: active ? "flex" : "" }}>
          {items?.map((item) => {
            const isActive = item === activeLink;
            const activeColor = navLinkColor.find(
              (planet) => planet.name === item
            )?.color;
            const navStyle = {
              textDecoration: isActive ? `underline ` + activeColor : "none",
              textDecorationThickness: isActive ? "3px" : "",
            };

            return (
              <li
                className={isActive ? "active" : ""}
                onClick={() => onNavClick(item)}
                key={item}
                style={navStyle}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
