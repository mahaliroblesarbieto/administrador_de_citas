import React from "react";
import Formulario from "./components/Formulario";
import { useState } from "react";

function App() {
  const [citas, guardarCitas] = useState([]);

  const obtenerCitas = cita => {
    guardarCitas([...citas, cita]);
  };
  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario obtenerCitas={obtenerCitas} />
          </div>
          <div className="one-half column"></div>
        </div>
      </div>
    </>
  );
}

export default App;
