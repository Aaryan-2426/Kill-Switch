import { FaChartLine } from "react-icons/fa";
import { policyDetails } from "../../data/dummyData";
import { motion } from "framer-motion";

function DailyLimitCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:border-cyan-500 transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-gray-400">Daily Limit</h3>
        <FaChartLine className="text-cyan-400 text-xl" />
      </div>

      <p className="text-cyan-400 text-2xl font-bold mt-4">
        {policyDetails.dailyLimit}
      </p>
    </motion.div>
  );
}

export default DailyLimitCard;