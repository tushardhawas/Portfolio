import React, { useState } from "react";
import Header from "./component/Header";
import Welcome from "./component/Welcome";
import Projects from "./component/Projects";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  const [gradientStyle, setGradientStyle] = useState({});

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;

    // Get the position relative to the container
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const shadowX = (x - width / 2) / 10;
    const shadowY = (y - height / 2) / 10;

    const gradient = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0.65), #121212 400px)`;

    setGradientStyle({
      background: gradient,
      transition: "background 3s ease-out",
      boxShadow: `${shadowX}px ${shadowY}px 50px rgba(0, 0, 0, 0.2)`, // dynamic shadow

    });
  };

  return (
    <div
      className="container"
      style={gradientStyle}
      onMouseMove={handleMouseMove}
    >
      <div className="App">
        <Header />
        <main className="Main">
          <Welcome />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
