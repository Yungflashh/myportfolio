import "../../styles/navBar.css"
const NavBar = () => {
  return (
    <div>
            <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#about">About Me</a></li>
        <li className="nav-item"><a href="#skills">Skills</a></li>
        <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
        <li className="nav-item"><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
    </div>

  )
}

export default NavBar