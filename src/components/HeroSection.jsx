import "../styles/HeroSection.css"
// import { useEffect, useRef } from 'react';
// import { gsap } from "gsap/gsap-core";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import TypewriterEffect from "./TypeWriter"
import { useState } from "react"

import myImg from "../assets/myImg.png"

import Adenusi_cv from "../assets/my_cv.pdf"
import { FaGithub,FaLinkedin ,FaDownload } from "react-icons/fa";
import { MdOutgoingMail} from "react-icons/md";
import oval from "../assets/oval.svg"







const HeroSection = () => {

   


    
    
    
      const [isLoading, setIsLoading] = useState(false);
    
      const handleDownload = () => {
        // Add the "loading" class for the animation
        setIsLoading(true);
    
        // Simulate download delay with a timeout (e.g., 2 seconds)
        setTimeout(() => {
          // Your download logic here, e.g., triggering the file download
          const link = document.createElement('a');
          link.href = Adenusi_cv;  // Update with your actual CV file path
          link.download = 'Adenusi_Kayode_cv.pdf';
          link.click();
    
          // Reset the loading state after download
          setIsLoading(false);
        }, 2000); // Adjust timeout duration as per animation duration
      };
    
   
    
    
  
  return (
   
    <div  className="HeroSection">

        <div className="HeroText">
            <h2>HI, I am</h2>
            <p>Adenusi Oluwakayode David</p>
            <TypewriterEffect />

            <button 
          id="downloadbtn" 
          onClick={handleDownload} 
          className={`buttonStyle ${isLoading ? 'loading' : ''}`}
        >
          {isLoading ? 'Downloading...' : 'Download CV'} <FaDownload />
        </button>

            <div className="icons">
            <a href="https://github.com/Yungflashh" target="_blank"><FaGithub size={40}/> </a> 
             <a href="https://linkedin.com/in/kayodeadenusi" target="_blank"><FaLinkedin size={40} /></a> 
            <a href="mailto:kayskidadenusi29@gmail.com" target="_blank" ><MdOutgoingMail size={40} /></a> 

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