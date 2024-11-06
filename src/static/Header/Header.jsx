import { useState } from "react";
import "../../styles/Header.css"
import { IoMdMenu } from "react-icons/io";
import NavBar from "./NavBar";
// import About from "../../pages/AboutPage/About";
import { Link } from "react-router-dom";

const Header = () => {
  
  const scrollToAbout = (idpassed) => {
    const aboutSection = document.getElementById(idpassed);
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };
  

  const [navBar, setnavBar] = useState(false)

  function toggleBar (){
    
    setnavBar(navBar => !navBar);
    console.log(navBar);
    
    
  }
  return (

   
    <div className="header-container" id="header">
    <header className="header">
      <h1 className="header-title"> <span>A</span>DENUSI <span>O</span>LUWAKAYODE <span>D</span>AVID</h1>
      <div className="links">

          <Link to={"#"} > <nav className="nav-item" onClick={() => scrollToAbout("about")}>About Me</nav>  </Link>

         
        <Link to={"#"}> <nav className="nav-item"onClick={() => scrollToAbout("services")} >Services</nav> </Link>
        <Link to={"#"}><nav className="nav-item" onClick={() => scrollToAbout("myWorks")}>My Works</nav> </Link> 
         <Link to={"#"}> <nav className="nav-item" onClick={() => scrollToAbout("contact")} > Contact Me</nav> </Link>

        
      </div>
      <IoMdMenu id="menuBar" size={30} className="menu-icon" onClick={toggleBar} />
    </header>
  

        {navBar && <NavBar />} {/* Render NavBar conditionally */}
    </div>
  )
}

export default Header