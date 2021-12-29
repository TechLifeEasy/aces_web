import Events from "./Events";
import Team from './Team';
import About from "./About";


function App() {
  return (
      <>
            <img src="/image/home_bg.svg" className="absolute w-screen h-screen"></img>
    <div className="flex w-3/4 flex-col m-auto">

        <div className="flex flex-col  sm:h-screen my-4 justify-center">

            <div className=" z-10 flex flex-col w-fit items-center" >
                <img src="/image/Logo.png" className="w-20 h-20" alt="logo"></img>
                <h1 className=" text-2xl"> Association of Computer Engineering Students</h1>
                <h1 className=" text-3xl"> we run the grate comunity</h1>
            </div>
        </div>
     
     <About></About>
     <Team state={false}></Team>
     <Events state={false}></Events>

    </div>
      </>
  
  );
}

export default App;
