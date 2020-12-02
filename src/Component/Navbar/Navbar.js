import React from "react";
import Profile from "../../assets/img/my-image.jpg";
import BlueBtn from "../UI/BlueBtn";
import Fade from "react-reveal/Fade";
import Jello from "react-reveal/Jello";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = (props) => {
  return (
    <Fade right>
      <div className="navbar">
        <Jello>
          <div className="nav-img">
            <img src={Profile} alt={"Profile"} />
          </div>
        </Jello>

        <ul className="nav-list">
          <li>
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a href="#" className="nav-link">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link
              to="intro-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a href="#" className="nav-link">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link
              to="services-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a href="#" className="nav-link">
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link
              to="projects-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a href="#" className="nav-link">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a href="#" className="nav-link">
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <div
          className="container"
          style={{ marginTop: "60px", textAlign: "center" }}
        >
          <BlueBtn
            title="LinkedIn"
            link="https://www.linkedin.com/in/aahan-singh-charak-966a23191/"
            type="link"
          />
        </div>
      </div>
    </Fade>
  );
};

export default Navbar;
