import "../styles/HeroSection.css"
// import { useEffect, useRef } from 'react';
// import { gsap } from "gsap/gsap-core";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import TypewriterEffect from "./TypeWriter"

import myImg from "../assets/myImg.png"

import mycv from "../assets/my_cv.pdf"
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail} from "react-icons/md";
import oval from "../assets/oval.svg"







const HeroSection = () => {

    // const boxRef = useRef(null);

    // useEffect(() => {
    //     // gsap.to is used to animate the element referenced by boxRef
    //     gsap.to(boxRef.current, {
    //       x: 100,       // Move the box 300px to the right
    //       duration: 2,   // Animation duration
    //       ease: "power2.out", // Easing function for smooth animation
    //     });
    //   }, []); // Empty dependency array ensures this runs only once, on mount


        const handleDownload = () => {
            // Replace 'path/to/your/file.pdf' with the actual path to your PDF
            const link = document.createElement('a');
            link.href = mycv
            link.download = 'Oluwakayode David Adenusi Cv'; // Optional: Specify the name for the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
  return (
    // ref={boxRef}
    <div  className="HeroSection">

        <div className="HeroText">
            <h2>HI, I am</h2>
            <p>Adenusi Oluwakayode David</p>
            <TypewriterEffect />

        <button onClick={handleDownload} className="buttonStyle"> Download CV </button>

            <div className="icons">
            <a href="https://github.com/Yungflashh" target="_blank"><FaGithub size={40}/> </a> 
             <a href="www.linkedin.com/in/kayodeadenusi" target="_blank"><FaLinkedin size={40} /></a> 
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