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
    <aside className="w-64 min-h-[calc(100vh-64px)] bg-zinc-900 border-r border-zinc-800 p-5">
      <nav className="space-y-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500 text-black font-semibold"
                  : "text-gray-300 hover:bg-zinc-800 hover:text-cyan-400"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;