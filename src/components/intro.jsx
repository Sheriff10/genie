import React from "react";
import { FaChartLine, FaRecycle } from "react-icons/fa";

export default function Intro() {
   return (
      <div className="intro">
         <div className="intro-wrap">
            <div className="container">
               <div className="intro-con d-flex align-items-center justify-content-center text-center">
                  <div>
                     <div className="intro-text">
                        <h1><b>Genie is here to grant <br /> all of your wish</b></h1>
                     </div>
                     <div className="intro-btn">
                        <a href="#" className="btn btn-lg">
                           <i><FaChartLine /> </i> Chart
                        </a>
                        <a href="#" className="btn btn-lg">
                           Buy <i><FaRecycle/></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
