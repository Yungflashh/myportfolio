import { useState, useContext } from "react";
import "../../styles/Header.css";
import { IoMdMenu } from "react-icons/io";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { myValue } from "../../context/NavState";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToAbout = (idpassed) => {
    const aboutSection = document.getElementById(idpassed);
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const boolean = useContext(myValue);
  const [navBar, setnavBar] = useState(boolean);

  function toggleBar() {
    setnavBar((prev) => !prev);
  }

  return (
    <motion.div 
      className="header-container" 
      id="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <header className="header">
        <motion.h1 
          className="header-title"
          whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
          transition={{ duration: 0.5 }}
        >
          <span>A</span>DENUSI <span>O</span>LUWAKAYODE <span>D</span>AVID
        </motion.h1>

        <motion.div 
          className="links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {["about", "services", "myWorks", "contact"].map((id) => (
            <motion.nav 
              key={id}
              className="nav-item"
              whileHover={{ scale: 1.2, color: "#FF014F" }}
              onClick={() => scrollToAbout(id)}
            >
              {id === "myWorks" ? "My Works" : id.charAt(0).toUpperCase() + id.slice(1)}
            </motion.nav>
          ))}
        </motion.div>

        <motion.div 
          whileTap={{ rotate: 90, scale: 1.2 }}
        >
          <IoMdMenu id="menuBar" size={30} className="menu-icon" onClick={toggleBar} />
        </motion.div>
      </header>

      <NavBar isVisible={navBar} onClose={() => setnavBar(false)} />

    </motion.div>
  );
};

export default Header;
