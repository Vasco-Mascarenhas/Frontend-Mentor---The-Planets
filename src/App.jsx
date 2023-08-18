import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import data from "./../data.json";
import Planet from "./components/planet/Planet";
console.log(data);
function App() {
  const [planet, setPlanet] = useState("Mercury");
  const [activeLink, setActiveLink] = useState(false);
  const handleNavClick = (link) => {
    setPlanet(link);
    setActiveLink(link);
  };

  const planetData = data.filter((planetData) => planetData.name === planet);

  return (
    <>
      <NavBar
        onNavClick={handleNavClick}
        items={data.map((item) => item.name)}
        activeLink={activeLink}
      />
      <Planet planet={planetData} />
    </>
  );
}

export default App;
