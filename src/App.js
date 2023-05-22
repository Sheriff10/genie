import logo from "./logo.svg";
import "./App.css";
import "./css/global.css";
import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import { HTB } from "./components/how_to_buy";
import Tokenomics from "./components/tokenomics";
import Footer from "./components/footer";

function App() {
   return (
      <div className="App">
         <div className="wrapper">
            <Header />
            <Intro />
         </div>
         <About />
         <HTB />
         <Tokenomics />
         <Footer />
      </div>
   );
}

export default App;
