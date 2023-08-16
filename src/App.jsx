import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import data from "./../data.json";
console.log(data);
function App() {
  const handleNavClick = (link) => {
    console.log(link);
  };

  return (
    <>
      <NavBar
        onNavClick={handleNavClick}
        items={data.map((item) => item.name)}
      />
    </>
  );
}

export default App;
