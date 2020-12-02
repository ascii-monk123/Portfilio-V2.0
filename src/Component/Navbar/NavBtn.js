import React, { useState } from "react";
import Jello from "react-reveal/Jello";

const NavBtn = (props) => {
  const [open, toggleNav] = useState(false);
  const toggleBtn = () => {
    toggleNav(!open);
  };
  return (
    <Jello>
      <div
        className="navbtn"
        onClick={() => {
          toggleBtn();
          props.clicked();
        }}
      >
        <div className={`hamburger ${open ? "rotatePlus" : ""}`}></div>
        <div className={`hamburger ${open ? "hide" : ""}`}></div>
        <div className={`hamburger ${open ? "rotateMinus" : ""}`}></div>
      </div>
    </Jello>
  );
};

export default NavBtn;
