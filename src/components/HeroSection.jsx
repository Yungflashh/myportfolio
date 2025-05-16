import "../styles/HeroSection.css";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypewriterEffect from "./TypeWriter";
import myImg from "../assets/myImg.png";
import Adenusi_cv from "../assets/my_cv.pdf";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import oval from "../assets/oval.svg";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Scroll-triggered animations
  useEffect(() => {
    gsap.fromTo(
      ".HeroText h2",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".HeroText h2",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".HeroText p",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".HeroText p",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".TypewriterEffect",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".TypewriterEffect",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#downloadbtn",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#downloadbtn",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".icons a",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".icons",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#myImg",
      { opacity: 0, y: 100, scale: 0.8, rotate: -10 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#myImg",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  const handleDownload = () => {
    setIsLoading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = Adenusi_cv;
      link.download = "Adenusi_Kayode_cv.pdf";
      link.click();
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="HeroSection">
      <div className="HeroText">
        <h2>HI, I am</h2>
        <p id="name">Adenusi Oluwakayode David</p>
        <div className="TypewriterEffect">
          <TypewriterEffect />
        </div>
        <button
          id="downloadbtn"
          onClick={handleDownload}
          className={`buttonStyle ${isLoading ? "loading" : ""}`}
        >
          {isLoading ? "Downloading..." : "Download CV"} <FaDownload />
        </button>

        <div className="icons">
          <a href="https://github.com/Yungflashh" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
          <a href="https://linkedin.com/in/kayodeadenusi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="mailto:kayskidadenusi29@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdOutgoingMail size={40} />
          </a>
        </div>
      </div>

      <div className="imageDiv">
        <img id="oval" src={oval} alt="oval" />
        <img id="myImg" src={myImg} alt="Adenusi" />
      </div>
    </div>
  );
};

export default HeroSection;
