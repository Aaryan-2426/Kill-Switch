import { motion } from "framer-motion";
import {
  FaEdit,
  FaWallet,
  FaRobot,
  FaPowerOff,
} from "react-icons/fa";

function PolicyControls({ openLimitModal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 mt-8"
    >
      <h2 className="text-2xl font-bold mb-6">
        Policy Controls
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <button
        onClick={openLimitModal}
        className="flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg transition">
          <FaEdit />
          Edit Daily Limit
        </button>

        <button className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition">
          <FaWallet />
          Manage Wallets
        </button>

        <button className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition">
          <FaRobot />
          Toggle AI Protection
        </button>

        <button className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition">
          <FaPowerOff />
          Emergency Freeze
        </button>

      </div>
    </motion.div>
  );
}

export default PolicyControls;