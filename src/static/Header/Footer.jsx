import { Link } from "react-router-dom";
import "../../styles/Footer.css"
import { FaCircleArrowUp } from "react-icons/fa6";

const Footer = () => {

    const scrollToAbout = (idpassed) => {
        const aboutSection = document.getElementById(idpassed);
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div className="footerDiv">
             <div className="Footer">
            <p>CopyWright @2024 <span> Adenus Kayode David</span>.  All right Reserved</p>
              

            
    </div>

          <Link to={"#"}>  <p id="b2Top"  onClick={() => scrollToAbout("header")} > Back to Top <FaCircleArrowUp /> </p>   </Link>
    </div>
   
  )
}

export default Footer