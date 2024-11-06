import "./About.css"
import myImg2 from "../../assets/myImg2.png"
import { LuCheckCircle } from "react-icons/lu";


const About = () => {
  return (
    <div className="container" id="about">
            <div className="aboutimageDiv">
                    <img src={myImg2} alt="" />

            </div>


            <div className="textDiv">
                    <h4>About me</h4>
                    <p id="title"> <span>Driven</span>, Innovative Software <span>Engineer</span></p>
                    <p>As a software engineer, I thrive on the challenge of transforming ideas into functional applications that make a difference in people`s lives. My journey began with a fascination for technology and problem-solving, and now I enjoy crafting elegant code that not only meets user needs but also enhances their experiences. Collaborating with diverse teams, I dive deep into understanding requirements, always aiming to create innovative solutions that are both efficient and user-friendly. Continuous learning is a core part of my life, as I stay updated with the latest technologies and trends, ensuring that I can contribute meaningfully to projects that shape the future. For me, being a software engineer is not just a job; it’s a passion that fuels my creativity and drive.</p>

                    <div className="iconsDiv">
                        <p>  <LuCheckCircle /> Develop highly interactive Front end / User Interfaces for the web</p>   
                        <p>  <LuCheckCircle /> Responsible for implementing visual elements that users interact with in a web application</p>   
                        <p>  <LuCheckCircle /> Works closely with UX/UI designers to translate designs into functional interfaces.</p>   
                        <p>  <LuCheckCircle />Stays updated with the latest web technologies, trends, and best practices in front-end development.</p>   

                    </div>

            </div>

    </div>
  )
}

export default About