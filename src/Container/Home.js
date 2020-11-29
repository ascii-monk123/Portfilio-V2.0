import React from "react";
import Logo from "../assets/img/landing-page.png";
import HeadLogo from "../Component/HeadLogo";
import BlueBtn from "../Component/UI/BlueBtn";
import { FaChevronDown } from "react-icons/fa";

const headStyles = {
  backgroundImage: `linear-gradient(135deg,rgba(0, 64, 77, 0.9) 0% ,rgba(0, 0, 0, 0.8) 100%),url(${Logo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

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
    </div>
  );
};

export default Home;
