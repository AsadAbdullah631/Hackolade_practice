import "./HeroImgStyles.css"
import IntroImg from "../assests/into-bg2.jpg"
import React from 'react'
import  {Link} from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A PYTHON DEVELOPER</p>
        <h1>MERN Stack Developer</h1>
        <div>
            <Link className="btn" to="/project">Projects</Link>
            <Link className="btn btn-light" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg



