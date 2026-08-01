import { FaMoon } from "react-icons/fa";
import { settingsData } from "../../data/dummyData";

function ThemeCard() {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-400">Theme</h3>
        <FaMoon className="text-yellow-400 text-xl" />
      </div>

      <p className="text-yellow-400 text-xl font-bold mt-4">
        {settingsData.theme}
      </p>
    </div>
  );
}

export default ThemeCard;