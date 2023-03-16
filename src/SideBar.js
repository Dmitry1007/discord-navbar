import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">
            <SideBarIcon text="Fire" icon={<FaFire size="28" />} />
            <SideBarIcon text="Plus" icon={<BsPlus size="32" />} />
            <SideBarIcon
                text="Thunder"
                icon={<BsFillLightningFill size="20" />}
            />
            <SideBarIcon text="Poop" icon={<FaPoo size="20" />} />
            <SideBarIcon text="Settings" icon={<BsGearFill size="22" />} />
        </div>
    );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
);

export default SideBar;
