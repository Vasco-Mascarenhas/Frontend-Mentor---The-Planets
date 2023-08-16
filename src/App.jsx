import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import data from "./../data.json";
import Planet from "./components/planet/Planet";
console.log(data);
function App() {
  const [planet, setPlanet] = useState("");
  const handleNavClick = (link) => {
    setPlanet(link);
  };

  return (
    <>
      <NavBar
        onNavClick={handleNavClick}
        items={data.map((item) => item.name)}
      />
      <Planet planet={planet} />
    </>
  );
}

export default App;
