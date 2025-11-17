const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

// Ruta GET de ejemplo
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde el backend con Express!" });
});

// Ruta POST de ejemplo
app.post("/api/enviar", (req, res) => {
  const { nombre } = req.body;
  res.json({ respuesta: `Hola ${nombre}, he recibido tus datos.` });
});

app.listen(3001, () => console.log("Servidor backend en http://localhost:3001"));
