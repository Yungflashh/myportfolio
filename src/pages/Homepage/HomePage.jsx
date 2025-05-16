import Contact from "../../components/Contact"
import HeroSection from "../../components/HeroSection"
import Services from "../../components/Services"
import TechStack from "../../components/TechStack"
import Works from "../../components/Works"
import About from "../AboutPage/About"
import "./HomePage.css"


const HomePage = () => {
  return (
    <div>
        
        <HeroSection />
        <About />
        <Services />
        <TechStack />
        <Works />
        <Contact />
        
        </div>
    
  )
}

export default HomePage