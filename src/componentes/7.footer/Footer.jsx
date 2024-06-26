import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    // <div className="contan">
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#ser">Services</a>
        </li>
        <li>
          <a href="#abt">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <p>© 2023 Spencer Sharp. All rights reserved.</p>
      
    </footer>
    // </div>
  );
};

export default Footer;
