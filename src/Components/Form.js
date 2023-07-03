import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form action="">
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" placeholder="Type Your Message Here" cols="30" rows="6"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form




