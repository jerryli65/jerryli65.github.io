import React from "react";

// import "./home.css"
import ProHome from "../professional/pro_home.jsx"

const Home = () => {
  return (
    <section id="home">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      <div className="container home__container">
        <ProHome />
      </div>

      {/* <Footer /> */}
    </section>
  );
};

export default Home;