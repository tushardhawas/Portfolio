import React from "react";
import welcomeImage from "../assets/welcome.svg";

function Welcome() {
  return (
    <section className="welcome-section">
      
        <img src={welcomeImage} alt="Welcome" />
      
      <p>
        My name is Tushar Dhawas, I'm a Front-end developer based in Pune,
        India. I have developed many types of front-ends from well-known Job
        platforms to Diner booking platforms.
      </p>
      <p>
        "I'm dedicated to crafting sleek, precise interfaces and delivering
        seamless, user-friendly experiences."
      </p>
    </section>
  );
}

export default Welcome;
