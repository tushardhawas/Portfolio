import React, { useState } from "react";

function Card({ children }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped(!flipped);

  return (
    <div className={`card-container ${flipped ? "flip-back" : ""}`} onClick={toggleFlip}>
      <div className="card">
        <div className="face front">{children[0]}</div>
        <div className="face back">{children[1]}</div>
      </div>
    </div>
  );
}

export default Card;
