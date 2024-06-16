import React from "react";

import me from "../../assets/me.png";
import resume from "../../assets/resume.pdf";

import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { ImProfile } from "react-icons/im";

import "./per_home.css";
import Contact from "../contact/Contact.jsx";
import Card from "../card/card.jsx";

const PerHome = () => {
  return (
    <section id="home">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      <div id="card">
        <div id="info-card">
          <center>
            <img id="profile-pic" src={me} alt="Jerry Li" />
          </center>

          <h1>Jerry Li</h1>

          <div id="button-container">
            <div id="cta">
              <a
                href="https://www.linkedin.com/in/jerryli65/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <BsLinkedin size={20} color={"#caf1d7"} />
              </a>
              <a
                href="https://github.com/jerryli65/"
                className="cta"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <AiFillGithub size={20} color={"#caf1d7"} />
              </a>
              <a href="mailto: jerry.li479@gmail.com">
                <AiFillMail size={20} color={"#caf1d7"} />
              </a>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <ImProfile size={20} color={"#caf1d7"} />
              </a>
            </div>

            <div id="contactme">
              <Contact />
            </div>
          </div>
        </div>

        <hr id="vertical-divider" />

        <div id="right-card-wrapper">
          <div id="info-card">
            <Card />
          </div>  
        </div>
      </div>
    </section>
  );
};

export default PerHome;
