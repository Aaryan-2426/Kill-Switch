import { FaGlobe } from "react-icons/fa";
import { settingsData } from "../../data/dummyData";

function NetworkCard() {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-400">Network</h3>
        <FaGlobe className="text-cyan-400 text-xl" />
      </div>

      <p className="text-cyan-400 text-xl font-bold mt-4">
        {settingsData.network}
      </p>
    </div>
  );
}

export default NetworkCard;