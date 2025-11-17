import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/saludo")
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje));
  }, []);

  const enviarDatos = async () => {
    const res = await fetch("http://localhost:3001/api/enviar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: "Carlos" })
    });

    const data = await res.json();
    setRespuesta(data.respuesta);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>{mensaje}</h1>

      <button onClick={enviarDatos}>Enviar datos al backend</button>

      {respuesta && <p>{respuesta}</p>}
    </div>
  );
}

export default App;
