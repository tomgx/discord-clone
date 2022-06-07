import Channelbar from "./components/ChannelBar";
import Topbar from "./components/TopBar";
import Textchannels from "./components/TextChannels";
import Profile from "./components/Profile";
import ChatBox from "./components/ChatBox";
import UsersTab from "./components/UsersTab";

function App() {
  return (
    <div className="w-full h-screen bg-[#36393e] overflow-hidden">
      <Topbar />
      <Channelbar />
      <Textchannels />
      <Profile />
      <UsersTab />
      <ChatBox />
    </div>
  );
}

export default App;
