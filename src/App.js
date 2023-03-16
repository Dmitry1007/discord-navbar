// import logo from "./logo.svg";
import "./App.css";
import ChannelBar from "./ChannelBar";
import SideBar from "./SideBar";
import Feed from "./Feed";

function App() {
    return (
        <div className="flex">
            <SideBar />
            <ChannelBar />
            <Feed />
        </div>
    );
}

export default App;
