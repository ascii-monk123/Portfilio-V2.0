import React from "react";
import Logo from "../assets/img/landing-page.png";
import HeadLogo from "../Component/HeadLogo";
import BlueBtn from "../Component/UI/BlueBtn";
import {
  FaChevronDown,
  FaCode,
  FaMobileAlt,
  FaTeamspeak,
  FaGithub,
  FaMailBulk,
  FaLinkedin,
} from "react-icons/fa";
import ProfileImg from "../assets/img/my-image.jpg"; //importing the image
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import Roll from "react-reveal/Roll";
import { Link } from "react-scroll";

import Project from "../Component/Project/Project";
//styles for the header and the background
const headStyles = {
  backgroundImage: `linear-gradient(135deg,rgba(0, 64, 77, 0.9) 0% ,rgba(0, 0, 0, 0.8) 100%),url(${Logo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

//the home container
const Home = () => {
  return (
    <div className="home" style={headStyles}>
      <header className="home-header" id="header">
        <Fade left>
          <HeadLogo />
        </Fade>

        <div className="home-message">
          <Zoom>
            <h1>AAHAN SINGH</h1>
          </Zoom>

          <Fade down>
            <h3 className="orange-gradient">{"{Front-End Web Developer}"}</h3>
          </Fade>
          <Fade bottom>
            <p>Html . Css . Javascript . React . Scss</p>
            <div className="button-container">
              <BlueBtn
                title={"Contact Me"}
                type="email"
                email="aahancharak@gmail.com"
              />
              <BlueBtn
                title={"View Profile At Linkedin"}
                type="link"
                link="https://www.linkedin.com/in/aahan-singh-charak-966a23191/"
                offsetL={1}
              />
            </div>
          </Fade>

          <button className="to-bottom">
            <FaChevronDown />
          </button>
        </div>
      </header>
      {/******************This is the intro section **********************/}
      <section className="intro-section" id="intro-section">
        <div className="container">
          <div className="wrapper">
            <div className="grid columns3 row-gap-0 col-gap-1">
              <div className="col-1-of-6">
                <div className="wrapper img-wrapper">
                  <RubberBand>
                    <div className="circle-image">
                      <img src={ProfileImg} alt={"Profile "} />
                    </div>
                  </RubberBand>
                </div>
              </div>

              <div className="col-3-of-6">
                <Zoom bottom>
                  <div className="about-me">
                    <h1> Hola {<span className="rotate">👋</span>}</h1>
                    <br />
                    <p>
                      I'm Aahan a coffee lover ☕. I'm a 20-year old{" "}
                      <b>Front-End Web Developer</b>💻. I'm currently pursuing
                      my 3rd year in C.S.E at Manipal University Jaipur.
                    </p>
                    <br />
                    <p>
                      I've been doing web development for the past 1 and a half
                      years. I started learning html,css and js back in 2019.
                      I've also been working and learning react over the past 6
                      months.
                    </p>
                    <br />
                    <p>
                      Over the span of these 1 and a half years I've created
                      close to a 30 personal projects.You can check out my
                      projects on{" "}
                      <a
                        href="https://github.com/pokemonTrainer5833"
                        target="_blank"
                        className="blue-link"
                      >
                        github
                      </a>
                      . I am working on developing my skills in redux and
                      node.js and by doing this I'm moving closer towards my
                      goal of becoming a <b>MERN Stack Web Developer</b> .
                    </p>
                    <br />
                    <p>
                      I'm currently looking for a summer internship as a react
                      developer for the year 2021(free or paid) in order to
                      understand the industry workflow pattern. I am a quick
                      learner and can write clean and understandable code for
                      the client.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>

            <div className="gradient-hr transX orange-gradient"></div>
          </div>
        </div>
      </section>
      {/*********************** Services section starts *********************************** */}
      <section className="services-section" id="services-section">
        <Roll left>
          <h1>What can I Offer ?</h1>
        </Roll>

        <br />
        <br />
        <br />
        <Roll left>
          <p>
            I will provide help you remarkable first impression with simple and
            clean websites
          </p>
        </Roll>

        <div className="mt-15">
          <div className="services-grid">
            <div className="service-col">
              <div className="wrapper">
                <Zoom top>
                  <h1>
                    <FaCode />
                  </h1>
                </Zoom>
                <Zoom bottom>
                  <h2 className="orange-gradient">Web Development</h2>
                  <p>
                    HTML5,CSS3,Javascript,React,Redux,SCSS
                    ,Firebase,C,SQL(Basic)
                  </p>
                </Zoom>
              </div>
            </div>
            <div className="service-col">
              <Zoom top>
                <h1>
                  <FaMobileAlt />
                </h1>
              </Zoom>
              <Zoom bottom>
                <h2 className="orange-gradient">Responsive Design</h2>
                <p>
                  I can make your website responsive so that it doesnt look ugly
                  at mobile screens
                </p>
              </Zoom>
            </div>
            <div className="service-col">
              <Zoom top>
                <h1>
                  <FaTeamspeak />
                </h1>
              </Zoom>
              <Zoom bottom>
                <h2 className="orange-gradient">Teamwork</h2>
                <p>
                  I have some experience of working in a team and can
                  communicate well with the team members to make sure the
                  product is satisfactory
                </p>
              </Zoom>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="gradient-hr transX orange-gradient"></div>
        </div>
      </section>
      {/*************************This is the projects section ********************************/}
      <section className="projects-section" id="projects-section">
        <Zoom left>
          <h1>Projects</h1>
        </Zoom>

        <br />
        <br />
        <Zoom left>
          <p>Here are some of my Projects</p>
        </Zoom>

        <Project />

        <div className="container" style={{ marginTop: "120px" }}>
          <div className="gradient-hr transX orange-gradient"></div>
        </div>
      </section>

      {/**************************** This is the contact me section ****************************************** */}
      <section className="contact-section" id="contact-section">
        <div className="container">
          <Fade left>
            <h1>Get in Touch</h1>
            <p>
              I would love to take to you. Even if it's to say hey, don't
              hesitate to drop an email
            </p>
          </Fade>
          <Zoom bottom>
            <div className="social-links">
              <a href="mailto:aahancharak@gmail.com">
                <span>
                  <FaMailBulk />
                </span>
                aahancharak@gmail.com
              </a>
              <a
                href="https://github.com/pokemonTrainer5833"
                rel="noreferrer"
                target="_blank"
              >
                <span>
                  <FaGithub />
                </span>
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/aahan-singh-charak-966a23191/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  {" "}
                  <FaLinkedin />
                </span>
                LinkedIn
              </a>
            </div>
          </Zoom>

          <div className="gradient-hr transX orange-gradient"></div>
        </div>
      </section>

      {/************************* The footer section *****************************************/}
      <footer className="main-footer" id="main-footer">
        <div className="container">
          <Zoom top>
            <div className="footer-links">
              <Link
                to="header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a href="#">Home</a>
              </Link>
              <Link
                to="intro-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a href="#">About</a>
              </Link>
              <Link
                to="services-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a href="#">Services</a>
              </Link>
              <Link
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a href="#">Projects</a>
              </Link>
              <Link
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a href="#">Contacts</a>
              </Link>
            </div>
            <p className="mt-3">
              <span>
                <FaCode />
                &nbsp; with 💙 by Aahan Singh . Copyright &copy; 2020
              </span>
            </p>
          </Zoom>

          <br />
          <br />
          <Zoom bottom>
            <p>Made using React and Scss</p>
            <br />
            <br />
            <br />
            <br />
            <div className="footer-links soc-links">
              <a
                href="https://github.com/pokemonTrainer5833"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aahan-singh-charak-966a23191/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </Zoom>
        </div>
      </footer>
    </div>
  );
};

export default Home;
