import Socials from "./components/Socials";
import Events from "./components/Events";
import Team from "./components/Team";
import { Navbar } from "./components/Navbar";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <CTA />
      <Socials></Socials>
    </div>
  );
}

export default App;
