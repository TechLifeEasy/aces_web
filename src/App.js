
import Socials from "./components/Socials";
// import Events from "./components/Events";
// import Team from './components/Team';
import {Navbar} from './components/Navbar'
import { useState ,useEffect} from "react";
import Footer from './components/Footer';
// import Navbar2  from "./components/Navbar2";

import {BsFillSunFill,BsMoonFill} from 'react-icons/bs';

function App() {

  const [isLightTheam,setLightTeam]=useState(true);

  useEffect(()=>{
    if(isLightTheam){
      document.querySelector('body').classList.remove('dark')
      document.querySelector('body').classList.remove('body_d')
    }else{
      document.querySelector('body').classList.add('dark')
      document.querySelector('body').classList.add('body_d')
    }
  },[isLightTheam])

  return (
    <div className={`flex flex-col`}>
     
     <Navbar/>
     {/* <Navbar2/> */}
     <Socials></Socials>


     <div className=" absolute right-10 top-1 text-white cursor-pointer"  onClick={()=>setLightTeam(!isLightTheam)}>
       

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
