// src/components/IngredientsList.jsx
import React, { useEffect, useState } from "react";

function IngredientsList({ list }) {

  const [images, setImages] = useState({}); // { Chicken: "url", Salt: "url", ... }

  useEffect(() => {
    async function loadImages() {
      const imgs = {};

      for (const item of list) {
        const res = await fetch(`http://localhost:3000/api/meal/image/${item.ingredient}-small`);
        const data = await res.json();
        imgs[item.ingredient] = data.image;
      }

      setImages(imgs);
    }

    loadImages();
  }, [list]);

  return (
    <div className="ingredients">
      <h2>Ingredientes</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            
            {/* Imagen del ingrediente */}
            {images[item.ingredient] && (
              <img 
                src={images[item.ingredient]} 
                alt={item.ingredient} 
                width="50"
                style={{ borderRadius: "6px" }}
              />
            )}

            {/* Nombre y medida */}
            <span>
              <strong>{item.ingredient}</strong> — {item.measure}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
