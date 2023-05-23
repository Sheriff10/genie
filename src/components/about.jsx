import React from "react";

export default function About() {
   return (
      <div className="about" id="about">
         <div className="container">
            <div className="row align-items-center justify-content-center">
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
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-6">
                  <div className="abt-img d-flex justify-content-center">
                     <img
                        src="genie.png"
                        alt="About Genie"
                        className="img-fluid"
                     />
                  </div>
               </div>
               <div className="col-12 col-lg-6 bot-con">
                  .
                  <div className="abt-text bot">
                     <div className="head">
                        <span>
                           Twitter <b>Bot 🤖</b>
                        </span>
                     </div>
                     <div className="textw">
                        <p>
                           GENIE GRANT WISH Introducing Genie, the mystical
                           being now in the crypto world! Tag @GenieGrantWish in
                           your post or under a tweet and witness the magic
                           unfold 🧞✨
                        </p>
                        <a
                           href="https://twitter.com/geniegrantwish?s=21&t=oeAxtrHMe2RLqjaoJPTLlw"
                           className="btn btn-sm" target="_blank"
                        >
                           Grant WIsh Twitter BOT
                        </a>
                     </div>
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
