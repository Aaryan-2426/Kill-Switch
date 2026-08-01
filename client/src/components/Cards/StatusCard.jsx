import { FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getWallet } from "../../services/walletService";

function StatusCard() {

  const [frozen, setFrozen] = useState(null);

  useEffect(() => {

    async function loadStatus() {

      try {

        const data = await getWallet();

        setFrozen(data.frozen);

      } catch (err) {

        console.log(err);

      }

    }

    loadStatus();

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
        <h3 className="text-gray-400">Status</h3>

        <FaShieldAlt
          className={`text-xl ${
            frozen ? "text-red-500" : "text-green-400"
          }`}
        />
      </div>

      <p
        className={`mt-3 font-semibold ${
          frozen ? "text-red-500" : "text-green-400"
        }`}
      >
        {frozen === null
          ? "Loading..."
          : frozen
          ? "Frozen"
          : "Protected"}
      </p>

    </motion.div>
  );
}

export default StatusCard;