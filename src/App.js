// import logo from "./logo.svg";
import "./App.css";
import ChannelBar from "./ChannelBar";
import SideBar from "./SideBar";

function App() {
    return (
        <div className="flex">
            <SideBar />
            <ChannelBar />
        </div>
    );
}

export default App;
