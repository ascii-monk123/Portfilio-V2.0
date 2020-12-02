import Home from "./Container/Home";
import NavBtn from "./Component/Navbar/NavBtn";
import Navbar from "./Component/Navbar/Navbar";
import { useState } from "react";

import Fade from "react-reveal/Fade";

function App() {
  const [showNav, toggleNavHandler] = useState(false);
  const toggleNav = () => {
    toggleNavHandler(!showNav);
  };
  return (
    <div className="app">
      {showNav ? <Navbar show={showNav} /> : null}
      <NavBtn clicked={toggleNav} />
      <Home />
    </div>
  );
}

export default App;
