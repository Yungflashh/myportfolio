import "../../styles/navBar.css";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = ({ isVisible, onClose }) => {
  const navItems = [
    { name: "About Me", id: "about" },
    { name: "Services", id: "services" },
    { name: "My Works", id: "myWorks" },
    { name: "Contact Me", id: "contact" },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sliding Nav */}
          <motion.nav
            className="navbar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <ul className="nav-list">
              {navItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a onClick={() => handleClick(item.id)}>{item.name}</a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
