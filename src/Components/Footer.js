import { FaEnvelope, FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                <div>
                    <p>E-470/16-B Pirzada Street Main Boulevard DHA</p>
                    <p>Lahore, Pakistan</p>
                </div>
            </div>
            <div className="phone">
                <FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                <div>
                    <h4>(+92)321 4440466</h4>
                    <h4>(+92)319 3661903</h4>
                </div>
            </div>
            <div className="email">
                <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                <div>
                    <p>aooa1999.aooa@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>I am a passionate Python and MERN Stack Developer. Recently graduated from UMT. I enjoy doing small and guided projects.</p>
            <div className="social">
              <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/>
              <FaTwitter size={30} style={{color:"white", marginRight:"1rem"}}/>
              <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer


