import React from "react";

export default function About() {
   return (
      <div className="about" id="about">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-12 col-lg-6">
                  <div className="abt-text">
                     <div className="head">
                        <span>About <b>GENIE</b></span>
                     </div>
                     <div className="text">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Sit, molestiae sed dolorem officiis ipsam
                           maiores, reprehenderit quod, error necessitatibus
                           laborum libero sapiente? Reiciendis corrupti commodi
                           tenetur placeat consectetur aspernatur eaque.
                        </p>
                        <a href="#" className="btn btn-sm">See Chart</a>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-6">
                <div className="abt-img d-flex justify-content-center">
                    <img src="gg.png" alt="About Genie" className="img-fluid" />
                </div>
               </div>
            </div>
         </div>
         <div className="bg-img bg1"><img src="gw.png"/></div>
         <div className="bg-img"><img src="gw.png"/></div>
      </div>
   );
}
