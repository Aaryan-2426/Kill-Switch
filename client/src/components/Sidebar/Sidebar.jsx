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
    <aside className="w-64 min-h-[calc(100vh-64px)] bg-zinc-900/80 backdrop-blur-lg border-r border-cyan-500/20 p-5">
      <nav className="space-y-3">
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