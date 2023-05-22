import React from "react";

export default function About() {
   return (
      <div className="about" id="about">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-12 col-lg-6">
                  <div className="abt-text">
                     <div className="head">
                        <span>
                           About <b>GENIE</b>
                        </span>
                     </div>
                     <div className="text">
                        <p>
                           Once upon a time, in a distant land, there was a
                           mystical being named Genie. For centuries, Genie
                           roamed the realms, spreading joy and granting wishes
                           to those in need. But as the world evolved, Genie
                           felt the need to adapt and embrace the digital age.
                           Now, Genie stands tall in the crypto realm, ready to
                           unleash his magic, prosperity and abundance to those
                           who believe in his power.
                        </p>
                        <a href="#" className="btn btn-sm">
                           See Chart
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-6">
                  <div className="abt-img d-flex justify-content-center">
                     <img
                        src="gg.png"
                        alt="About Genie"
                        className="img-fluid"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-img bg1">
            <img src="gw.png" />
         </div>
         <div className="bg-img">
            <img src="gw.png" />
         </div>
      </div>
   );
}
