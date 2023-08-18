import React, { useState } from "react";
import "./planet.css";
import Button from "../button/Button";

const Planet = ({ planet }) => {
  const option = ["overview", "internal structure", "surface geology"];

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  return (
    <main>
      {planet.map((planet) => (
        <>
          <div key={planet.name} className="container planet-container">
            <div className="planetImg">
              {activeButtonIndex === 0 ? (
                <img key={planet.name} src={planet.images.planet} alt="" />
              ) : activeButtonIndex === 1 ? (
                <img key={planet.name} src={planet.images.internal} alt="" />
              ) : activeButtonIndex === 2 ? (
                <>
                  <img key={planet.name} src={planet.images.planet} alt="" />
                  <img
                    key={planet.name}
                    className="planet-geo"
                    src={planet.images.geology}
                    alt=""
                  />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="planetContent">
              <div className="planet-info">
                <h2>{planet.name}</h2>
                {activeButtonIndex === 0 ? (
                  <p>{planet.overview.content}</p>
                ) : activeButtonIndex === 1 ? (
                  <p>{planet.structure.content}</p>
                ) : activeButtonIndex === 2 ? (
                  <p>{planet.geology.content}</p>
                ) : (
                  ""
                )}
                <span>
                  Source: <a href={planet.overview.source}>Wikipedia</a>
                </span>
              </div>
              <div className="planet-btns">
                {option.map((option, index) => (
                  <Button
                    key={option}
                    selectedPlanet={planet.name}
                    buttonNumber={"0" + (index + 1)}
                    buttonText={option}
                    isActive={activeButtonIndex === index}
                    onClick={() => setActiveButtonIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="planetInfo container">
            <div className="infoBox">
              <span>rotation time</span>
              <h2>{planet.rotation}</h2>
            </div>
            <div className="infoBox">
              <span>revolution time</span>
              <h2>{planet.revolution}</h2>
            </div>
            <div className="infoBox">
              <span>radius</span>
              <h2>{planet.radius}</h2>
            </div>
            <div className="infoBox">
              <span>average temp.</span>
              <h2>{planet.temperature}</h2>
            </div>
          </div>
        </>
      ))}
    </main>
  );
};

export default Planet;
