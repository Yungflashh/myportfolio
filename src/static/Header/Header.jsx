import { useState } from "react";
import "../../styles/Header.css"
import { IoMdMenu } from "react-icons/io";
import NavBar from "./NavBar";

const Header = () => {

  const [navBar, setnavBar] = useState(false)

  function toggleBar (){
    
    setnavBar(navBar => !navBar);
    console.log(navBar);
    
    
  }
  return (

   
    <div className="header-container">
    <header className="header">
      <h1 className="header-title">ADENUSI OLUWAKAYODE DAVID</h1>
      <div className="links">
        <nav className="nav-item">About Me</nav>
        <nav className="nav-item">Skills</nav>
        <nav className="nav-item">Portfolio</nav>
        <nav className="nav-item">Contact Me</nav>

        
      </div>
      <IoMdMenu id="menuBar" size={30} className="menu-icon" onClick={toggleBar} />
    </header>
  

        {navBar && <NavBar />} {/* Render NavBar conditionally */}
    </div>
  )
}

export default Header