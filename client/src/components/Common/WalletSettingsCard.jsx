import { FaWallet } from "react-icons/fa";
import { settingsData } from "../../data/dummyData";

function WalletSettingsCard() {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-400">Wallet</h3>
        <FaWallet className="text-green-400 text-xl" />
      </div>

      <p className="text-green-400 text-xl font-bold mt-4">
        {settingsData.wallet}
      </p>
    </div>
  );
}

export default WalletSettingsCard;