import React, { useState, useEffect } from "react";
import "./Tema.css";
import Oscuro from "../../assets/icons/oscuro.png";
import Claro from "../../assets/icons/claro.png";

function Tema() {
  const [darkMode, setDarkMode] = useState(false);

  // cambiamos el color del body dependiendo de la clase de css
  useEffect(() => {
    document.body.classList.toggle("dark_Mode", darkMode);
  }, [darkMode]);

  const handleMode = () => {
    setDarkMode(!darkMode);
  };

  if (!darkMode) {
    return (
      <div className="containerMode">
        <img src={Oscuro} onClick={handleMode} alt="icono modo oscuro" />
      </div>
    );
  } else {
    return (
      <div className="containerMode">
        <img src={Claro} onClick={handleMode} alt="icono modo claro" />
      </div>
    );
  }
}

export default Tema;
