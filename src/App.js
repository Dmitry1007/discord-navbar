// import logo from "./logo.svg";
import "./App.css";
import ChannelBar from "./ChannelBar";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

function App() {
    return (
        <div className="flex">
            <SideBar />
            <ChannelBar />
            <NavBar />
        </div>
    );
}

export default App;
