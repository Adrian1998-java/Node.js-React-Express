// src/components/VideoPlayer.jsx
import React from "react";

function VideoPlayer({ url }) {
  // Convertir URL normal de YouTube a formato embebido
  const embed = url.replace("watch?v=", "embed/").replace("shorts/", "embed/");

  return (
    <div className="video-player">
      <h2>Video</h2>
      <iframe
        width="420"
        height="240"
        src={embed}
        title="Video"
        allowFullScreen
        style={{ borderRadius: "10px", border: "none" }}
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
