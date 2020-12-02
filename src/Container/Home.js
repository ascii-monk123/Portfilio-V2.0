import React from "react";
import Logo from "../assets/img/landing-page.png";
import HeadLogo from "../Component/HeadLogo";
import BlueBtn from "../Component/UI/BlueBtn";
import { FaChevronDown } from "react-icons/fa";
import ProfileImg from "../assets/img/my-image.jpg"; //importing the image

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
      <header className="home-header">
        <HeadLogo />
        <div className="home-message">
          <h1>AAHAN SINGH</h1>
          <h3>{"{Front-End Web Developer}"}</h3>
          <p>Html . Css . Javascript . React . Scss</p>
          <div className="button-container">
            <BlueBtn title={"Contact Me"} />
            <BlueBtn title={"View Profile At Linkedin"} offsetL={1} />
          </div>
          <button className="to-bottom">
            <FaChevronDown />
          </button>
        </div>
      </header>
      <section className="intro-section">
        <div className="container">
          <div className="wrapper">
            <div className="grid columns3 row-gap-0 col-gap-1">
              <div className="col-1-of-6">
                <div className="wrapper img-wrapper">
                  <div className="circle-image">
                    <img src={ProfileImg} alt={"Profile "} />
                  </div>
                </div>
              </div>
              <div className="col-3-of-6">
                <div className="about-me">
                  <h1>Hola {<span className="rotate">👋</span>}</h1>
                  <br />
                  <p>
                    I'm Aahan a coffee lover ☕. I'm a 20-year old{" "}
                    <b>Front-End Web Developer</b>💻. I'm currently pursuing my
                    3rd year in C.S.E at Manipal University Jaipur.
                  </p>
                  <br />
                  <p>
                    I've been doing web development for the past 1 and a half
                    years. I started learning html,css and js back in 2019. I've
                    also been working and learning react over the past 6 months.
                  </p>
                  <br />
                  <p>
                    Over the span of these 1 and a half years I've created close
                    to a 30 personal projects.You can check out my projects on{" "}
                    <a
                      href="https://github.com/pokemonTrainer5833"
                      target="_blank"
                      className="blue-link"
                    >
                      github
                    </a>
                    . I am working on developing my skills in redux and node.js
                    and by doing this I'm moving closer towards my goal of
                    becoming a <b>MERN Stack Web Developer</b> .
                  </p>
                  <br />
                  <p>
                    I'm currently looking for a summer internship as a react
                    developer for the year 2021(free or paid) in order to
                    understand the industry workflow pattern. I am a quick
                    learner and can write clean and understandable code for the
                    client.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-hr transX orange-gradient"></div>
          </div>
        </div>
      </section>
      <section className="services-section"></section>
    </div>
  );
};

export default Home;
