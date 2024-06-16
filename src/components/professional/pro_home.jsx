import React from "react";

import me from "../../assets/me.png";
import resume from "../../assets/resume.pdf";
import tamu from "../../assets/icons/tamu.png";
import collins from "../../assets/icons/collins.png";
import lavner from "../../assets/icons/lavner.jfif";
import conte from "../../assets/icons/conte.png";
import sga from "../../assets/icons/sga.png";
import engr from "../../assets/icons/engr.png";
import arp from "../../assets/icons/arp.png";

import { ImNewTab } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { FaChessKing } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

import "./pro_home.css";
import Contact from "../contact/Contact.jsx";

const ProHome = () => {
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
            <div id="section">
              <h2>Education</h2>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <img src={tamu} alt="TAMU" class="icon" />
                    <h3>Texas A&M University</h3>
                  </div>
                  <h4 id="sub-img-title">
                    Bachelor of Science in Computer Science
                  </h4>
                </div>
                <div id="col2">
                  <h3>December 24</h3>
                </div>
              </div>
            </div>

            <div id="section">
              <h2>Experience</h2>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <img src={collins} alt="Collins Aerospace" class="icon" />
                    <h3>Collins Aerospace</h3>
                  </div>
                  <h4 id="sub-img-title">Software Engineer Intern</h4>
                </div>
                <div id="col2">
                  <h3>Summer 24</h3>
                </div>
              </div>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <img src={collins} alt="Collins Aerospace" class="icon" />
                    <h3>Collins Aerospace</h3>
                  </div>
                  <h4 id="sub-img-title">Software Engineer Co-Op</h4>
                </div>
                <div id="col2">
                  <h3>Summer/Fall 23</h3>
                </div>
              </div>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <img src={lavner} alt="Lavner Education" class="icon" />
                    <h3>Lavner Education</h3>
                  </div>
                  <h4 id="sub-img-title">Information Technology Intern</h4>
                </div>
                <div id="col2">
                  <h3>Summer 22</h3>
                </div>
              </div>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <img src={conte} alt="Conte Research Labs" class="icon" />
                    <h3>Conte Research Lab</h3>
                  </div>
                  <h4 id="sub-img-title">
                    Data Science Undergraduate Researcher
                  </h4>
                </div>
                <div id="col2">
                  <h3>Spring 22</h3>
                </div>
              </div>
            </div>

            <div id="section">
              <h2>Projects</h2>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <FaChessKing color="tan" />
                    <h3>Household Management Optimization Application</h3>
                    <a
                      href="https://github.com/emily-wax/Team_Charmander"
                      className="cta"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      <ImNewTab color="white" />
                    </a>
                  </div>
                  <h4 id="sub-img-title">
                    Mobile application solution for optimizing shared households
                  </h4>
                </div>
                <div id="col2">
                  <h3>
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
                      alt="flutter icon"
                    />

                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"
                      alt="dart icon"
                    />

                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
                      alt="firebase icon"
                    />

                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                      alt="python icon"
                    />
                  </h3>
                </div>
              </div>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    {/* <img src={paycom} alt="Paycom" class="icon" /> */}
                    <FaChessKing color="tan" />
                    <h3>Restaurant Point-of-Sales System</h3>
                    <a
                      href="https://github.com/jerryli65/Restaurant-POS"
                      className="cta"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      <ImNewTab color="white" />
                    </a>
                  </div>
                  <h4 id="sub-img-title">
                    Full Stack Application for a pizza restaurant
                  </h4>
                </div>
                <div id="col2">
                  <h3>
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                      alt="java icon"
                    />

                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                      alt="postgres icon"
                    />

                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                      alt="html icon"
                    />

                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="javascript icon"
                    />

                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                      alt="css icon"
                    />
                  </h3>
                </div>
              </div>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <FaChessKing color="tan" />
                    <h3>SETitaire Card Game</h3>

                    <a
                      href="https://github.com/jerryli65/SETitaire"
                      className="cta"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      <ImNewTab color="white" />
                    </a>
                  </div>
                  <h4 id="sub-img-title">
                    A GUI of an original card game inspired by SET and Solitaire
                  </h4>
                </div>
                <div id="col2">
                  <h3>
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                      alt="java icon"
                    />
                  </h3>
                </div>
              </div>
            </div>

            <div id="section">
              <h2>Leadership</h2>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <img
                      src={collins}
                      alt="Collins Aerospace Student Ambassador"
                      class="icon"
                    />
                    <h3>Student Ambassadors, Collins Aerospace</h3>
                  </div>
                  <h4 id="sub-img-title">
                    Chief coordinator of events and networking, TAMU X Collins
                  </h4>
                </div>
                <div id="col2">
                  <h3>Fall 23 - Summer 24</h3>
                </div>
              </div>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <img
                      src={sga}
                      alt="TAMU Student Government Association"
                      class="icon"
                    />
                    <h3>Student Government, TAMU</h3>
                  </div>
                  <h4 id="sub-img-title">
                    Service Committee, Programs Representative
                  </h4>
                </div>
                <div id="col2">
                  <h3>Fall 22 - Summer 23</h3>
                </div>
              </div>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <img
                      src={engr}
                      alt="TAMU Engineering Honors"
                      class="icon"
                    />
                    <h3>Engineering Honors, TAMU</h3>
                  </div>
                  <h4 id="sub-img-title">Student Mentor, Events Coordinator</h4>
                </div>
                <div id="col2">
                  <h3>Summer 21 - Summer 23</h3>
                </div>
              </div>
            </div>

            <div id="section">
              <h2>Awards</h2>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <img src={arp} alt="Aggie Research Programs" class="icon" />
                    <h3>Aggie Research Scholar</h3>
                  </div>
                  <h4 id="sub-img-title">
                    For outstanding contribution to computer science research
                  </h4>
                </div>
                <div id="col2">
                  <h3>Winter 22</h3>
                </div>
              </div>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <img src={tamu} alt="TAMU" class="icon" />
                    <h3>TAMU ENGR Honors Fellowship</h3>
                  </div>
                  <h4 id="sub-img-title">
                    For service and mentorship to freshmen in Engineering
                  </h4>
                </div>
                <div id="col2">
                  <h3>21-22, 22-23</h3>
                </div>
              </div>
              <div id="row">
                <div id="col1">
                  <div id="img-title">
                    <img src={tamu} alt="TAMU" class="icon" />
                    <h3>Dean's Honor Roll</h3>
                  </div>
                  <h4 id="sub-img-title">
                    For exceptional academic performance in higher education
                  </h4>
                </div>
                <div id="col2">
                  <h3>Fall 21 - Now</h3>
                </div>
              </div>
            </div>
            {/* section  */}
          </div>
          {/* <div id="menu">
              <ul id="menu-options">
                <li>Personal</li>
                <li>Professional</li>
              </ul>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProHome;
