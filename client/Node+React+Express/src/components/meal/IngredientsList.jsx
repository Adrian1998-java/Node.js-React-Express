// src/components/IngredientsList.jsx
import React from "react";

function IngredientsList({ list }) {
  return (
    <div className="ingredients">
      <h2>Ingredientes</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <strong>{item.ingredient}</strong> — {item.measure}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
