import {
  FaHome,
  FaShieldAlt,
  FaExchangeAlt,
  FaRobot,
  FaCog,
  FaPowerOff,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/", icon: <FaHome /> },
  { name: "Policies", path: "/policies", icon: <FaShieldAlt /> },
  { name: "Transactions", path: "/transactions", icon: <FaExchangeAlt /> },
  { name: "Kill Switch", path: "/killswitch", icon: <FaPowerOff /> },
  { name: "AI Agent", path: "/agent", icon: <FaRobot /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
];

function Sidebar() {
  return (
    <aside
    className="
    fixed
    left-0
    top-20
    w-72
    h-[calc(100vh-80px)]
    bg-zinc-950
    border-r
    border-zinc-800
    "
    >
      <nav className="space-y-3 p-5">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30"
                  : "text-gray-300 hover:bg-zinc-800 hover:text-cyan-400 hover:translate-x-2"
              }`
            }
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;