import WorksCard from "./WorksCard"
import coolors from "../assets/coolors.png"
import pickup from "../assets/pickup.png"
import Nike from "../assets/nike.png"
import wordGame from "../assets/wordGame.png"
import country from "../assets/country.png"
import synTech from "../assets/syntech.png"

const Works = () => {
  return (
    <div className='workContainer' id="myWorks">
                <h2>Explore My Works</h2>

                
                <div>
                    <WorksCard image={Nike} headerText={"Nike E-commerce site"} desc={"This site is more than just an online store—it’s a reflection of the experience I wanted to create for you. It’s about making shopping easy, quick, and enjoyable, no matter where you are or what device you’re on. By focusing on clean design, speed, and responsiveness, I’ve built an e-commerce platform that puts you, the shopper, first. I’m really excited about how this turned out, and I hope you enjoy using it as much as I enjoyed creating it!"} stacks={"Stacks used :JavaScript, Html, Css"} btnTitle={"View Code"} btnTitle2={"Go Live"} codeBase={"https://github.com/Yungflashh/Nike"} liveSite={"https://nike-khaki-omega.vercel.app/"}/>

                </div>

                <div>
                    <WorksCard image={coolors} headerText={"Colour Palette"} desc={"I created a website designed to help developers connect with others in the tech community, collaborate on projects, and find like-minded professionals within their specific niche. Whether you’re a beginner or an experienced developer, this platform is the perfect place to meet others who share your interests and expertise."} stacks={"Stacks used : React, JavaScript, Html, Css"} btnTitle={"View Code"} btnTitle2={"Go Live"} codeBase={"https://github.com/Yungflashh/colors.git"} liveSite={"https://colors-navy.vercel.app/"}/>

                </div>

                <div>
                    <WorksCard image={pickup} headerText={"PickupLine Generator"} desc={"Looking for the perfect way to break the ice? Whether you're trying to add some humor to a conversation or simply make someone smile, my Pickup Line Generator has got you covered! This fun, interactive tool generates a wide variety of playful and witty pickup lines, helping you stand out and start a conversation in the most creative ways possible."} stacks={"Stacks used :JavaScript, Html, Css"} btnTitle={"View Code"} btnTitle2={"Go Live"} codeBase={"https://github.com/Yungflashh/pickupLine"} liveSite={"https://pickup-line-five.vercel.app/"}/>

                </div>



                <div>
                    <WorksCard image={wordGame} headerText={"Word Game"} desc={"I created a fun and interactive word guessing game that adds a colorful twist to the classic guessing challenge. In this game, you need to guess a hidden word, and with each guess, the game provides visual feedback to help you figure out the word."} stacks={"Stacks used : Typescript, JavaScript, Html, Css"} btnTitle={"View Code"} btnTitle2={"Go Live"} codeBase={"https://github.com/Yungflashh/myWORD"} liveSite={"https://my-word-sand.vercel.app/"}/>

                </div>


                <div>
                    <WorksCard image={country} headerText={"Country API"} desc={"I built a website that allows you to quickly access detailed information about any country, using a powerful API to fetch up-to-date data. Whether you’re curious about a country’s population, capital, languages, or flag, this site has it all."} stacks={"Stacks used : API, JavaScript, Html, Css"} btnTitle={"View Code"} btnTitle2={"Go Live"} codeBase={"https://github.com/Yungflashh/countryAPI"} liveSite={"https://country-api-lac-mu.vercel.app/"}/>

                </div>


                <div>
                    <WorksCard image={synTech} headerText={"SynTech"} desc={"I built a website that allows you to quickly access detailed information about any country, using a powerful API to fetch up-to-date data. Whether you’re curious about a country’s population, capital, languages, or flag, this site has it all."} stacks={"Stacks used : JavaScript, Html, Css"} btnTitle={"View Code"} btnTitle2={"Go Live"} codeBase={"https://github.com/Yungflashh/synTech"} liveSite={"https://syn-tech-iota.vercel.app/"}/>

                </div>
    </div>
  )
}

export default Works