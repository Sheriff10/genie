import React from "react";
import { FaTwitter, FaTelegram, FaBars } from "react-icons/fa";

export default function Header() {
    const toggleMenu = () => {
        const getMenu = document.querySelector(".header .menu-link")
        getMenu.classList.toggle('active')
    }   
    return (
      <div className="header">
         <div className="container">
            <div className="row align-items-center">
               <div className="col">
                  <div className="logo-con">
                     <img src="genie.png" alt="genie" />
                  </div>
               </div>
               <div className="col">
                  <div className="menu-link">
                     <a href="#" onClick={toggleMenu}>Home</a>
                     <a href="#about" onClick={toggleMenu}>About</a>
                     <a href="#buy" onClick={toggleMenu}>How to buy</a>
                     <a href="#tokenomics" onClick={toggleMenu}>Tokenomics</a>
                  </div>
               </div>
               <div className="col">
                  <div className="socials">
                     <div className="d-flex">
                        <i>
                           <FaTwitter />{" "}
                        </i>
                        <i>
                           <FaTelegram />{" "}
                        </i>
                     </div>
                  </div>
               </div>
               <div className="col j">
                  <div className="menu-bar" onClick={toggleMenu}>
                     <i>
                        <FaBars />{" "}
                     </i>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}