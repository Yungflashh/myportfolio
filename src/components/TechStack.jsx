import "../styles/TechStack.css"
import { SiTypescript,SiStyledcomponents  } from "react-icons/si";
import { FaJs,FaReact ,FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";




const TechStack = () => {
  return (
    <div className="containerDiv">
        <h2>Technologies</h2>

        <div className="stackIcons">

            <div className="techCard">
            <SiTypescript />
            <p>TypeScript</p>
            </div>
            <div className="techCard">
            < SiStyledcomponents />
            <p>Styled components</p>
            </div>
            <div className="techCard">
            <FaJs />
            <p>Javascript</p>
            </div>
            <div className="techCard">
            <FaReact />
            <p>React</p>
            </div>
            <div className="techCard">
            <FaBootstrap />
            <p>Bootstrap</p>
            </div>
            <div className="techCard">
            <RiTailwindCssFill />
            <p>Tailwind</p>
            </div>
            

          
           
            
            
        </div>
    </div>
  )
}

export default TechStack