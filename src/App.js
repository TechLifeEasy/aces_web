import Socials from "./components/Socials";
import Events from "./components/Events";
import Team from "./components/Team";
import { Navbar } from "./components/Navbar";
import DiscordLink from "./components/DiscordLink";

function App() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <DiscordLink />
      <Socials></Socials>
    </div>
  );
}

export default App;
