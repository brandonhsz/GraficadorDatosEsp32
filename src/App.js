import React, { useState, useEffect } from "react";
import Grafica from "./components/Grafica";
import "./App.css";

function App() {
  const [detener, setDetener] = useState(false);
  const [contador, setContador] = useState([0]);
  const [data, setData] = useState([0]);

  return (
    <div className="App App-header">
      <div className="absolute">
        <input
          className={`btn btn-${detener ? "success" : "danger"} mar`}
          value={detener ? "Activar" : "Detener"}
          type="button"
          onClick={() => setDetener(!detener)}
        />
        <input
          className="btn btn-dark mar"
          type="button"
          value="Resetear"
          onClick={() => setContador([0])}
        />
        <input
          className="background-tag"
          type="text"
          value={`${data[data.length - 1]}V`}
          disabled
        />
      </div>

      <Grafica
        setDetener={setDetener}
        detener={detener}
        contador={contador}
        setContador={setContador}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default App;
