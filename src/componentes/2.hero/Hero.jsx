import React from 'react'
import "./hero.css"
import { PopupButton } from "react-calendly";

function Hero() {
  return (
    <section className='hero flex'>
        <div className="left">
            <h1 className="header">AI AUTOMATION AGENCY</h1>
            <p className="contant">Let’s take you into a new meta-verse of futuristic AI development with multipleservices and ideas!</p>
        <div className="buttons flex">
            <div className="button1"> <a href="#abt">  About Us   </a></div>
            <PopupButton className='button2'
        url="https://calendly.com/unixes"
        rootElement={document.getElementById("root")}
        text="Book a Meeting"
      />
        </div>
        </div>
        <div className="right"><img src="/img/bar.png" alt="" /></div>
    </section>
  )
}

export default Hero