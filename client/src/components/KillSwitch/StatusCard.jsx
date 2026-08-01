import { FaShieldAlt } from "react-icons/fa";

function StatusCard() {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Wallet Status</h2>
        <FaShieldAlt className="text-green-400 text-2xl" />
      </div>

      <div className="mt-6">
        <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
          🟢 Protected
        </span>
      </div>
    </div>
  );
}

export default StatusCard;