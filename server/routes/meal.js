const express = require("express");
const router = express.Router();


router.get("/random", async (req, res) => {
  try {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";

    const response = await fetch(url);
    const data = await response.json();

    if (!data.meals || data.meals.length === 0) {
      return res.status(404).json({ error: "No se encontró ninguna receta." });
    }

    const meal = data.meals[0]; // procesamos y nos quedamos solo con el objeto

    res.json({
      success: true,
      meal,
    });

  } catch (error) {
    console.error("Error obteniendo receta:", error);
    res.status(500).json({ error: "Error al obtener la receta." });
  }
});

module.exports = router
