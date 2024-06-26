import React from 'react'
import "./header.css"
import { useEffect, useState } from "react";

function Header() {
  const [showModal, setshowModal] = useState(false);

  return (
    <>
    <header className="header flex">
      <div className="logo">
        <img src="/img/unixes_logo_full.png" alt="" />
      </div>
      <div className="nav">
        <ul className='nav-bar flex'>
          <li><a href="#">Home</a></li>
          <li><a href="#ser">Services</a></li>
          <li><a  href="#abt">About us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className='menu' onClick={() => {
          setshowModal(true);
        }}>☰</div>
      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              >✗</button>
            </li>
            <li><a href="#" onClick={() => {
                  setshowModal(false);
                }}>Home</a></li>
          <li><a href="#ser" onClick={() => {
                  setshowModal(false);
                }}>Services</a></li>
          <li><a  href="#abt" onClick={() => {
                  setshowModal(false);
                }}>About us</a></li>
          <li><a href="#contact" onClick={() => {
                  setshowModal(false);
                }}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
      <div className="line"></div>

      </>
  )
}

export default Header