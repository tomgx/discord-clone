import Channelbar from "./components/ChannelBar";
import Topbar from "./components/TopBar";
import Textchannels from "./components/TextChannels";
import Profile from "./components/Profile";
import ChatArea from "./components/ChatArea";

function App() {
  return (
    <div className="w-full h-screen bg-[#36393e] overflow-hidden">
      <Topbar />
      <Channelbar />
      <Textchannels />
      <Profile />
      <ChatArea />
    </div>
  );
}

export default App;
