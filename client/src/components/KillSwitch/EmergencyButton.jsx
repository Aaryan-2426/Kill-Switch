import { motion } from "framer-motion";
import { FaPowerOff } from "react-icons/fa";

function EmergencyButton() {
  return (
    <div className="flex flex-col items-center my-10">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(239,68,68,0.4)",
            "0 0 40px rgba(239,68,68,0.8)",
            "0 0 20px rgba(239,68,68,0.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="w-52 h-52 rounded-full bg-red-600 hover:bg-red-700 text-white flex flex-col items-center justify-center shadow-2xl"
      >
        <FaPowerOff className="text-6xl mb-4" />

        <span className="text-xl font-bold">
          FREEZE
        </span>

        <span className="text-sm">
          WALLET
        </span>
      </motion.button>

      <p className="text-red-400 mt-6 text-lg">
        Emergency Kill Switch
      </p>
    </div>
  );
}

export default EmergencyButton;