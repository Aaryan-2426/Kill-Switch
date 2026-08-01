import { FaExclamationTriangle } from "react-icons/fa";
import { walletData } from "../../data/dummyData";
import { motion } from "framer-motion";

function RiskCard() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:border-cyan-500 transition-all duration-300">

      <div className="flex items-center justify-between">
        <h3 className="text-gray-400">Risk</h3>
        <FaExclamationTriangle className="text-red-400 text-xl" />
      </div>

      <p className="text-red-400 mt-3 font-semibold">
        {walletData.risk}
      </p>

    </motion.div>
  );
}

export default RiskCard;