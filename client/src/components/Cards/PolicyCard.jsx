import { FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getWallet } from "../../services/walletService";

function PolicyCard() {

  const [dailyLimit, setDailyLimit] = useState("Loading...");

  useEffect(() => {

    async function loadPolicy() {

      try {

        const data = await getWallet();

        setDailyLimit(data.dailyLimit);

      } catch (err) {

        console.log(err);

      }

    }

    loadPolicy();

  }, []);

  return (
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:shadow-cyan-500/40 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300"
>

      <div className="flex items-center justify-between">
        <h3 className="text-gray-400">Policy</h3>
        <FaLock className="text-yellow-400 text-xl" />
      </div>

      <p className="text-yellow-400 mt-3 font-semibold">
        {dailyLimit} ETH
      </p>

    </motion.div>
  );
}

export default PolicyCard;