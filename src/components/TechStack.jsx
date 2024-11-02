import "../styles/TechStack.css"
import { SiTypescript,SiStyledcomponents  } from "react-icons/si";
import { FaJs,FaReact ,FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";




const TechStack = () => {
  return (
    <div className="container">
        <h2>Technologies</h2>

        <div className="stackIcons">
            <SiTypescript />
            < SiStyledcomponents />
            <FaJs />
            <FaReact />
            <FaBootstrap />
            <RiTailwindCssFill />
        </div>
    </div>
  )
}

export default TechStack