import React, { useState } from "react";
import "./home.css"; // Adjust CSS import as needed
import ProHome from "../professional/pro_home.jsx"; // Adjust import paths based on your project structure
import PerHome from "../personal/per_home.jsx"; // Adjust import paths based on your project structure

const Home = () => {
  const [showPersonal, setShowPersonal] = useState(true);

  const handleToggle = (isPersonal) => {
    setShowPersonal(isPersonal);
  };

  return (
    <section id="home">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      <div className="container home__container">
        <div className="toggle-buttons">
          <button
            className={`toggle-button ${showPersonal ? "active" : ""}`}
            onClick={() => handleToggle(true)}
          >
            Personal
          </button>
          <button
            className={`toggle-button ${!showPersonal ? "active" : ""}`}
            onClick={() => handleToggle(false)}
          >
            Professional
          </button>
        </div>

        <div className="home-content">
          {showPersonal ? <PerHome /> : <ProHome />}
        </div>
      </div>

      {/* <Footer /> */}
    </section>
  );
};

export default Home;
