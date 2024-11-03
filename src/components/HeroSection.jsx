import "../styles/HeroSection.css"

import TypewriterEffect from "./TypeWriter"

import myImg from "../assets/myImg.png"

import mycv from "../assets/my_cv.pdf"
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import oval from "../assets/oval.svg"







const HeroSection = () => {

        const handleDownload = () => {
            // Replace 'path/to/your/file.pdf' with the actual path to your PDF
            const link = document.createElement('a');
            link.href = {mycv}
            link.download = 'Oluwakayode David Adenusi Cv'; // Optional: Specify the name for the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
  return (
    <div className="HeroSection">

        <div className="HeroText">
            <h2>HI, I am</h2>
            <p>Adenusi Oluwakayode David</p>
            <TypewriterEffect />

        <button onClick={handleDownload} className="buttonStyle"> Download CV </button>

            <div className="icons">
            <FaGithub size={40}/>
            <FaLinkedin size={40}/>
            <MdOutlineAlternateEmail size={40}/>

            </div>
        

        </div>

        <div className="imageDiv">
        
            <img id="oval" src={oval} alt="my-image" />
            <img id="myImg" src={myImg} alt=""  />
        </div>

    </div>
  )
}

export default HeroSection