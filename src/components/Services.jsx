import Card from "./Card"
import "../styles/Services.css"
import Global from '../assets/Globe.svg'
import Phone from '../assets/Phone.svg'
import Users from '../assets/Users.svg'

const Services = () => {
  return (

    <>
     <h2>My Services</h2>
    <div className="servicesDiv">
       
        <Card icon={Global} title={"Web Development"} text={"Modern and mobile-ready website that will help you reach all of your marketing."} />
        <Card icon={Users} title={"Mentorship"} text={"Finds great joy in sharing my knowledge with others. As a technical mentor this allows me to give back to the community.."} />
        <Card icon={Phone} title={"Responsive Screen"} text={"Responsive screen design is a skill I’m passionate about. I love creating layouts that adapt seamlessly to different devices, ensuring a great user experience on smartphones, tablets, and desktops."} />
    </div>

    </>
  )
}

export default Services