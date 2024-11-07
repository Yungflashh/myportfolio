import  { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import myImg2 from "../../assets/myImg2.png";
import { LuCheckCircle } from "react-icons/lu";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // GSAP ScrollTrigger animation for the About section
    gsap.fromTo(
      ".aboutimageDiv", 
      {
        opacity: 0, 
        x: -100
      },
      {
        opacity: 1, 
        x: 0,
        scrollTrigger: {
          trigger: "#about", // Trigger the animation when the #about section is in view
          start: "top 80%", // Start the animation when the top of the section hits 80% of the viewport
          end: "bottom 30%", // End the animation when the bottom of the section hits 30% of the viewport
          scrub: 1, // Scrub to create a smooth scroll-linked animation
          markers: false, // Set to true if you want to see the markers for debugging
        }
      }
    );

    gsap.fromTo(
      ".textDiv", 
      {
        opacity: 0, 
        y: 100
      },
      {
        opacity: 1, 
        y: 0,
        scrollTrigger: {
          trigger: "#about", // Same trigger: when the #about section is in view
          start: "top 80%", // Start the animation when the top of the section hits 80% of the viewport
          end: "bottom 30%", // End the animation when the bottom of the section hits 30% of the viewport
          scrub: 1, // Scrub to smooth the animation with scroll
          markers: false, // Optional: set to true for debugging
        }
      }
    );

    gsap.fromTo(
      ".iconsDiv p", 
      {
        opacity: 0, 
        y: 50
      },
      {
        opacity: 1, 
        y: 0,
        stagger: 0.1, // Stagger the animation of each <p> tag
        scrollTrigger: {
          trigger: "#about", // Same trigger: when the #about section is in view
          start: "top 70%", // Start the animation when the top of the section hits 70% of the viewport
          end: "bottom 20%", // End the animation when the bottom of the section hits 20% of the viewport
          scrub: 1, // Scrub to smooth the animation with scroll
          markers: false, // Optional: set to true for debugging
        }
      }
    );
  }, []);

  return (
    <div className="container" id="about">
      <div className="aboutimageDiv">
        <img src={myImg2} alt="Profile" />
      </div>

      <div className="textDiv">
        <h4>About me</h4>
        <p id="title">
          <span>Driven</span>, Innovative Software <span>Engineer</span>
        </p>
        <p>
          As a software engineer, I thrive on the challenge of transforming
          ideas into functional applications that make a difference in people`s
          lives. My journey began with a fascination for technology and
          problem-solving, and now I enjoy crafting elegant code that not only
          meets user needs but also enhances their experiences. Collaborating
          with diverse teams, I dive deep into understanding requirements, always
          aiming to create innovative solutions that are both efficient and
          user-friendly. Continuous learning is a core part of my life, as I stay
          updated with the latest technologies and trends, ensuring that I can
          contribute meaningfully to projects that shape the future. For me, being
          a software engineer is not just a job; it’s a passion that fuels my
          creativity and drive.
        </p>

        <div className="iconsDiv">
          <p>
            <LuCheckCircle /> Develop highly interactive Front end / User
            Interfaces for the web
          </p>
          <p>
            <LuCheckCircle /> Responsible for implementing visual elements that
            users interact with in a web application
          </p>
          <p>
            <LuCheckCircle /> Works closely with UX/UI designers to translate
            designs into functional interfaces.
          </p>
          <p>
            <LuCheckCircle /> Stays updated with the latest web technologies,
            trends, and best practices in front-end development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
