import Events from "./Events";
import Team from './Team';
import About from "./About";


function App() {
  return (
    <div className="flex w-3/4 flex-col m-auto ">
     
     <About></About>
     <Team state={false}></Team>
     <Events state={false}></Events>
    

    </div>
  
  );
}

export default App;
