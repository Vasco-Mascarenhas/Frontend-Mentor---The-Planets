import React from "react";
import "./button.css";

const Button = ({ buttonText, buttonNumber, isActive, onClick }) => {
  return (
    <button
      id={buttonText}
      className={isActive ? "Active" : ""}
      onClick={onClick}
    >
      <span>{buttonNumber}</span>
      {buttonText}
    </button>
  );
};

export default Button;
