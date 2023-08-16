import React, { useState } from "react";
import "./planet.css";
import Button from "../button/Button";

const Planet = ({ planet }) => {
  const option = ["overview", "internal structure", "surface geology"];

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  return (
    <main>
      {planet.map((planet) => (
        <div key={planet.name} className="container planet-container">
          <div className="planetImg">
            <img src={planet.images.planet} alt="" />
          </div>
          <div className="planetContent">
            <h2>{planet.name}</h2>
            <p>{planet.overview.content}</p>
            <span>
              Source: <a href={planet.overview.source}>Wikipedia</a>
            </span>
            {option.map((option, index) => (
              <Button
                key={option}
                buttonNumber={"0" + (index + 1)}
                buttonText={option}
                isActive={activeButtonIndex === index}
                onClick={() => setActiveButtonIndex(index)}
              />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Planet;
