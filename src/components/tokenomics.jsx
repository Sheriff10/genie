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
                     {/* <div className="col pgs ">
                        <div>
                           <img src="60.svg" alt="Genie" /> <br />
                           <span>60% LOCKED</span>
                        </div>
                        <div>
                           <img src="40.svg" alt="Genie" /> <br />
                           <span>40% COMMUNITY </span>
                        </div>
                     </div> */}
                     <div className="col pp">
                        <div class="progress">
                           <div class="progress-bar bg-danger" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span className="text-danger"> 80% LP (LOCKED)</span> <br /><br />
                        <div class="progress">
                           <div class="progress-bar bg-warning" role="progressbar" style={{width: "10%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span className="text-warning"> 10% AIRDROP</span> <br /><br />
                        <div class="progress">
                           <div class="progress-bar bg-success" role="progressbar" style={{width: "8%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span className="text-success"> 8% CEX</span> <br /><br />
                        <div class="progress">
                           <div class="progress-bar bg-primary" role="progressbar" style={{width: "4%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span className="text-primary"> 4% TEAM TOKENS</span>

                     </div>
                     <div className="col d-flex justify-content-center">
                        <img src="tk.png" alt="tokenomics" className="img-fluid"/>
                     </div>
                  </div>
                  <div className="col-lg-6 col-12 text-light p-3 m-4">
                     <div className="airdrop">
                        <span  className="h2"><b>Airdrop</b></span>
                        <p className="h3">10% of $Genie token supply will be airdropped to randomly selected $GENIE holders</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
