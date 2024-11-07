import "../../styles/navBar.css";
import { useState, useContext } from "react";
import { myValue } from "../../context/NavState";

const NavBar = () => {
  const boolean = useContext(myValue);
  const [navBar, setNavBar] = useState(boolean);

  function toggleBar() {
    setNavBar((prevNavBar) => {
      const newNavBar = !prevNavBar;
      console.log(newNavBar); 
      return newNavBar;
    });
  }

  return (
    <div>
      <nav className={`navbar ${navBar ? "active" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item" onClick={toggleBar}><a href="#about">About Me</a></li>
          <li className="nav-item" onClick={toggleBar}><a href="#services">Services</a></li>
          <li className="nav-item" onClick={toggleBar}><a href="#myWorks">My Works</a></li>
          <li className="nav-item" onClick={toggleBar}><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
