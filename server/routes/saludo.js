const express = require("express");
const router = express.Router();

// Ruta GET de ejemplo
router.get("/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde el backend con Express!" });
});

// Ruta POST de ejemplo
router.post("/enviar", (req, res) => {
  const { nombre } = req.body;
  res.json({ respuesta: `Hola ${nombre}, he recibido tus datos.` });
});

module.exports = router