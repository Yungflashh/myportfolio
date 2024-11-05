import HeroSection from "../../components/HeroSection"
import Services from "../../components/Services"
import TechStack from "../../components/TechStack"
import Works from "../../components/Works"
import Header from "../../static/Header/Header"
import About from "../AboutPage/About"
import "./HomePage.css"

const HomePage = () => {
  return (
    <div>
        <Header/>
        <HeroSection />
        <About />
        <Services />
        <TechStack />
        <Works />
        
        </div>
    
  )
}

export default HomePage