import { FaLock } from "react-icons/fa";
import { walletData } from "../../data/dummyData";
import { motion } from "framer-motion";

function PolicyCard() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:border-cyan-500 transition-all duration-300">

      <div className="flex items-center justify-between">
        <h3 className="text-gray-400">Policy</h3>
        <FaLock className="text-yellow-400 text-xl" />
      </div>

      <p className="text-yellow-400 mt-3 font-semibold">
        {walletData.dailyLimit}
      </p>

    </motion.div>
  );
}

export default PolicyCard;