import Channelbar from "./components/Channelbar";
import Topbar from "./components/Topbar";
import Textchannels from "./components/Textchannels";


function App() {
  return (
    <div className="w-full h-screen bg-[#36393e] overflow-hidden">
      <Topbar />
      <Channelbar />
      <Textchannels />

    </div>
  );
}

export default App;
