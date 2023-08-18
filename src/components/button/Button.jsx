import React from "react";
import "./button.css";

const Button = ({
  buttonText,
  buttonNumber,
  isActive,
  onClick,
  selectedPlanet,
}) => {
  const planetData = [
    { name: "Mercury", color: "var(--lightBlue)" },
    { name: "Venus", color: "var(--yellow)" },
    { name: "Earth", color: "var(--purple)" },
    { name: "Mars", color: "var(--lightRed)" },
    { name: "Jupiter", color: "var(--red)" },
    { name: "Saturn", color: "var(--orange)" },
    { name: "Uranus", color: "var(--green)" },
    { name: "Neptune", color: "var(--blue)" },
    // ... other planets
  ];

  const selectedPlanetData = planetData.find(
    (planet) => planet.name === selectedPlanet
  );

  const buttonStyle = {
    backgroundColor:
      isActive && selectedPlanetData ? selectedPlanetData.color : "",
  };

  return (
    <button
      id={buttonText}
      className={isActive ? "active" : ""}
      onClick={onClick}
      style={buttonStyle}
    >
      <span>{buttonNumber}</span>
      {buttonText}
    </button>
  );
};

export default Button;
