import Socials from "./components/Socials";

import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Fade from 'react-reveal/Fade';

import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

function App() {
  const [isLightTheam, setLightTeam] = useState(true);

  useEffect(() => {
    if (isLightTheam) {
      document.querySelector("body").classList.remove("dark");
      document.querySelector("body").classList.remove("body_d");
    } else {
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.add("body_d");
    }
  }, [isLightTheam]);

  return (
    <div className={`flex flex-col`}>
      {/* <Navbar /> */}
      <Navbar />
    
      <Socials></Socials>

      <div className=" absolute right-12 top-6 text-black cursor-pointer dark:text-white"  onClick={()=>setLightTeam(!isLightTheam)}>
       

       {
         isLightTheam
         ?
         <BsMoonFill size={30}></BsMoonFill>
         :
         <BsFillSunFill size={30}></BsFillSunFill>
       }

       
     </div>

     

      <Footer></Footer>
    </div>
  );
}

export default App;
