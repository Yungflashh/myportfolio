import "../styles/Contact.css"
import { IoShieldCheckmark } from "react-icons/io5";

const Contact = () => {
  return (

    
    <>
    <h2>Let`s talk about your Next Project</h2>
    <div className="contactContainer" id="contact">
          <div className="contactText">
          

          <p>Discuss a project or just want to say hi? Connect with me via email or through a phone call.</p>

          <p className="iconColor"><IoShieldCheckmark /> 2+ years Experience</p>
          <p className="iconColor" ><IoShieldCheckmark /> Professional Software Developer</p>
          <p className="iconColor" ><IoShieldCheckmark /> Technical Mentor</p>
          <p className="iconColor" ><IoShieldCheckmark /> Project Advisor</p>
          <p className="iconColor" ><IoShieldCheckmark /> Leadership - Spirit</p>


          </div>

          <div className="contactForm">

              <div className="row">
                      <div className="nameField">
                        <label htmlFor="Name">Full Name</label>
                        <input id="Name"placeholder="example => Adenusi Kayode"/>
                      </div>
                      <div className="emailField">
                        <label htmlFor="email">Email</label>
                        <input type="email"  id="email" placeholder="example@gmail.com"/>
                      </div>
              </div>


              <div className="row">
                      <div className="phoneField">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" placeholder="+2349058943832"/>
                      </div>
                      <div className="subjectField">
                        <label htmlFor="subjec">Subject</label>
                        <input type="text"  id="subject" placeholder="I want to build a software, startup"/>
                      </div>
              </div>

              <label htmlFor="msg">Message</label>

              <textarea name="msg" id="msg" placeholder="Your message here"></textarea>

              <button id="snd">Send message</button>
              
          </div>
            

    </div>

    </>
  )
}

export default Contact