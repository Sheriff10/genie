import React from "react";

export const HTB = () => {
   const htbFunc = (img, title, text, tClass) => {
      return { img, title, text, tClass };
   };
   const htbArr = [
      htbFunc(
         "h1.png",
         "Create  a Wallet",
         "DOWNLOAD METAMASK OR ANY WALLET OF YOUR CHOICE FROM APP STORE OR GOOGLE PLAY STORE FOR FREE. FOR DESKTOP USERS, DOWNLOAD THE METAMASK.O EXTENSION. ",
         "tXn"
      ),
      htbFunc(
         "h2.png",
         "Get some eth",
         "WITH ETH IN YOUR WALLET YOU WILL BE ABLE TO SWAP FOR $GENIE AND JOIN THE ALADIN FAMILY. IF YOU DON'T HAVE ETH, YOU CAN BUY DIRECTLY ON METAMASK OR BUY ON ANOTHER EXCHANGE AND SEND IT TO YOUR WALLET",
         "tXp"
      ),
      htbFunc(
         "h3.png",
         "Go to Uniswap",
         "OPEN UNISWAP DAPP (APP.UNISWAP.ORG) AND CONNECT YOUR WALLET TO IT. PASTE THE CORRECT $GENIE TOKEN ADDRESS ON UNISWAP AND $GENIE TOKEN WILL POP UP, CLICK CONFIRM. WHEN METAMASK PROMPTS YOU FOR A WALLET SIGNATURE, SIGN.SWAP YOUR $ETH FOR $GENIE.",
         "tXn"
      ),
      htbFunc(
         "genie.png",
         "",
         "WE HAVE A 3% BUY/SELL TAXES SO YOU WILL NEED TO SET YOUR SLIPPAGE TO 20% TO AVOID FAILED TRANSACTION.",
         "tXp"
      ),
   ];
   return (
      <div className="htb" id="buy">
         <div className="container-fluid">
            <div className="htb-head text-center">
               <h1>How to Buy</h1>
            </div>
            <div className="row">
               {htbArr.map((i, index) => (
                  <div className={`col-12 ${i.tClass}`} key={index}>
                     <div className="htb-con">
                        <div className="htb-img">
                           <img src={i.img} alt="Genie" />
                        </div>
                        <div className="htb-text col-lg-5 ">
                           <div className="s-wrp">
                           <span>{i.title}</span> <br />
                           </div>
                           <small>{i.text}</small>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
