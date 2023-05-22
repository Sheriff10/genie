import React from "react";

export const HTB = () => {
   const htbFunc = (img, title, text, tClass) => {
      return { img, title, text, tClass };
   };
   const htbArr = [
      htbFunc(
         "h1.png",
         "Create  a Wallet",
         "download metamask or your wallet of choice from the app store.",
         "tXn"
      ),
      htbFunc(
         "h2.png",
         "Get some eth",
         "Have some ETH on L1 / Ethereum Mainnet, swap it on a bridge onto Arbitrum You can also buy ETH on Arbitrum directly on exchanges like Binance and Crypto.com.",
         "tXp"
      ),
      htbFunc(
         "h3.png",
         "Go to Uniswap",
         "connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $GENIE token address into Uniswap, select GENIE, and confirm. When Metamask prompts you for a wallet signature, sign.",
         "tXn"
      ),
      htbFunc(
         "genie.png",
         "Switch ETH for $GENIE",
         "we have 2% tax so you need to set slippage at 2% or above depending on price volatility.",
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
