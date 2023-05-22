import React from "react";

export default function Tokenomics() {
   return (
      <div className="tk" id="tokenomics">
         <div className="container">
            <div className="tk-intro text-center">
               <h1>
                  <b>TOKENOMICS</b>
               </h1>
               {/* <p className="h4 p-0 m-0">Token Supply</p>
               <span className="h4">
                  <b>100,000,000</b>
               </span> */}
            </div>
            <br />
            <div className="tk-progress">
               <div className="row justify-content-center">
                  <div className="col-lg-8 d-flex align-items-center  col-12">
                     <div className="col pgs ">
                        <div>
                           <img src="60.svg" alt="Genie" /> <br />
                           <span>60% LOCKED</span>
                        </div>
                        <div>
                           <img src="40.svg" alt="Genie" /> <br />
                           <span>40% COMMUNITY</span>
                        </div>
                     </div>
                     <div className="col d-flex justify-content-center">
                        <img src="tk.png" alt="tokenomics" className="img-fluid"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
