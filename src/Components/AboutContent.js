import "./AboutContentStyles.css"
import {Link} from "react-router-dom"
import React from 'react'
import react1 from "../assests/react_1.jpg"
import react2 from "../assests/react_2.jpg"
import react3 from "../assests/react_3.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a Python & MERN Stack developer. I create responsive secure websites for mu clients.</p>
        <Link to="/contact">
            <button className="btn">
                CONTACT
            </button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={react1} className="img" alt="true" />
            </div>
            <div className="img-stack bottom">
                <img src={react2} className="img" alt="true" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent



