import React from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
import { useState, useEffect } from "react";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));

    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const obtenerCitas = cita => {
    guardarCitas([...citas, cita]);
  };

  const eliminarCita = id => {
    const newCitas = citas.filter(e => e.id !== id);
    guardarCitas(newCitas);
  };

  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario obtenerCitas={obtenerCitas} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
