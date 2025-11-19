import React, { useEffect, useState } from "react";
import ImageViewer from "../components/meal/ImageViewer";
import IngredientsList from "../components/meal/IngredientsList";
import VideoPlayer from "../components/meal/VideoPlayer";

// 👆 Se añaden las diferentes librerías de React y componentes o hooks que se van a utilizar

function Meal() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/meal/random")
      .then((res) => res.json())
      .then((data) => setMeal(data.meal));
  }, []);

  if (!meal) return <h2>Cargando receta...</h2>;

  // Extraer ingredientes y medidas desde el objeto
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="meal-container">

      <h1>{meal.strMeal}</h1>
      <h3>{meal.strArea} — {meal.strCategory}</h3>

      {/* Imagen */}
      <ImageViewer image={meal.strMealThumb} />

      {/* Instrucciones */}
      <div className="instructions">
        <h2>Preparación</h2>
        <p style={{ whiteSpace: "pre-line" }}>
          {meal.strInstructions}
        </p>
      </div>

      {/* Ingredientes + Cantidades */}
      <IngredientsList list={ingredients} />

      {/* Video */}
      {meal.strYoutube && (
        <VideoPlayer url={meal.strYoutube} />
      )}

    </div>
  );
}

export default Meal;