// src/pages/Meal.jsx
import React, { useEffect, useState } from "react";
import ImageViewer from "../components/meal/ImageViewer";
import IngredientsList from "../components/meal/IngredientsList";
import VideoPlayer from "../components/meal/VideoPlayer";

function Meal() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMeal = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/api/meal/random");
      const data = await res.json();
      setMeal(data.meal);
    } catch (error) {
      console.error("Error al obtener receta:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  if (!meal) return <h2>Cargando receta...</h2>;

  // Extraer ingredientes + medidas
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="meal-page">
      
      {/* Botón nueva receta */}
      <div className="meal-actions">
        <button onClick={fetchMeal} disabled={loading}>
          {loading ? "Cargando..." : "Obtener otra receta"}
        </button>
      </div>

      {/* Sección de encabezado */}
      <header className="meal-header">
        <h1 className="meal-title">{meal.strMeal}</h1>
        <p className="meal-meta">
          {meal.strArea} • {meal.strCategory}
        </p>
      </header>

      {/* Imagen destacada */}
      <div className="meal-image">
        <ImageViewer image={meal.strMealThumb} />
      </div>

      {/* Sección principal de contenido */}
      <div className="meal-content">

        {/* Ingredientes a la izquierda */}
        <div className="meal-ingredients">
          <IngredientsList list={ingredients} />
        </div>

        {/* Instrucciones a la derecha */}
        <div className="meal-instructions">
          <h2>Preparación</h2>
          <p style={{ whiteSpace: "pre-line" }}>
            {meal.strInstructions}
          </p>
        </div>
      </div>

      {/* Video al final, centrado */}
      {meal.strYoutube && (
        <div className="meal-video">
          <VideoPlayer url={meal.strYoutube} />
        </div>
      )}

    </div>
  );
}

export default Meal;
