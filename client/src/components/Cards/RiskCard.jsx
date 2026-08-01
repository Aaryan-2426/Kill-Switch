import { FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getWallet } from "../../services/walletService";

function RiskCard() {

  const [risk, setRisk] = useState("Loading...");

  useEffect(() => {

    async function loadRisk() {

      try {

        const data = await getWallet();

        if (data.frozen) {
          setRisk("HIGH");
        } else {
          setRisk("LOW");
        }

      } catch (err) {

        console.log(err);

      }

    }

    loadRisk();

  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:border-cyan-500 transition-all duration-300"
    >

      <div className="flex items-center justify-between">

        <h3 className="text-gray-400">Risk</h3>

        <FaExclamationTriangle
          className={`text-xl ${
            risk === "HIGH"
              ? "text-red-400"
              : "text-green-400"
          }`}
        />

      </div>

      <p
        className={`mt-3 font-semibold ${
          risk === "HIGH"
            ? "text-red-400"
            : "text-green-400"
        }`}
      >
        {risk}
      </p>

    </motion.div>
  );
}

export default RiskCard;