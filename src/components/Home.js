import Events from "./Events";
import Team from './Team';
import About from "./About";
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Typewriter from 'typewriter-effect';


function App() {
  return (
      <>
    <img src="/image/home_bg.svg" className="absolute w-screen h-screen"></img>
    <div className="flex w-3/4 flex-col m-auto">

        <div className="flex flex-col  sm:h-screen my-4 justify-center">
        <Zoom top>
                <img src="/image/Logo.png"  className="w-20 h-20 ml-20" alt="logo"></img>
                </Zoom>
            <div className=" z-10 flex flex-col w-fit items-center" >
            {/* <Zoom top>
                <img src="/image/Logo.png"  className="w-20 h-20 " alt="logo"></img>
                </Zoom> */}
                {/* <Flip top>
                <h1 className=" text-2xl"> Association of Computer Engineering Students</h1>
                </Flip>
                <Flip bottom>

                <h1 className=" text-3xl"> we run the grate comunity</h1>
                </Flip> */}
                <div className="text-2xl font-serif text-blue-400 bg-sky-200 p-7 rounded-2xl mt-7">
                <Typewriter
                    onInit={(typewriter)=>{
                        typewriter.typeString("ACES\n").start();
                    }}
                />
                <Typewriter 
                    onInit={(typewriter)=>{
                        typewriter.typeString("Why to Join this Club?").pause(2000).deleteAll()
                        .typeString("You’ll learn more about yourself.").pause(2000).deleteAll()
                        .typeString("You’ll develop soft skills.").pause(2000).deleteAll().
                        typeString("You’ll learn how to work with a team.").pause(2000).deleteAll().
                        typeString("You’ll get networking opportunities.").pause(2000).deleteAll().
                        typeString("You’ll be able to use the skills you’ve learned in class.").pause(2000).deleteAll().
                        typeString("You’ll gain leadership skills.").pause(2000).deleteAll().
                        typeString("You’ll get a break from your studies.").pause(2000).deleteAll().
                        typeString(" You’ll expand your resume.").pause(2000).deleteAll().
                        typeString("You’ll be able to give back to the community.").pause(2000).deleteAll().
                        typeString("You’ll have fun!").pause(2000).deleteAll().
                        typeString("We Build a Great Community.").start();
                    }}
                />
                </div>
            </div>
        </div>
     
     <About></About>
     {/* <Team state={false}></Team> */}
     {/* <Events state={false}></Events> */}

    </div>
      </>
  
  );
}

export default App;
