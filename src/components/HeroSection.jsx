import "../styles/HeroSection.css"

import TypewriterEffect from "./TypeWriter"

import myImg from "../assets/myImg.jpg"

import mycv from "../assets/my_cv.pdf"



const HeroSection = () => {

        const handleDownload = () => {
            // Replace 'path/to/your/file.pdf' with the actual path to your PDF
            const link = document.createElement('a');
            link.href = "../assets/my_cv.pdf"
            link.download = 'my_cv.pdf'; // Optional: Specify the name for the downloaded file
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
        </div>

        <div className="imageDiv">
       
            <img src={myImg} alt="my-image" />
        </div>

    </div>
  )
}

export default HeroSection