// src/components/ImageViewer.jsx
import React from "react";

function ImageViewer({ image }) {
  return (
    <div className="image-viewer">
      <img 
        src={image} 
        alt="meal" 
        style={{
          width: "350px",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)"
        }}
      />
    </div>
  );
}

export default ImageViewer;
