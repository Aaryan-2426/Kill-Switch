import { FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { getWallet } from "../../services/walletService";

function WalletCard() {

  const [address, setAddress] = useState("Loading...");

  useEffect(() => {

  async function loadWallet() {

    try {

      const data = await getWallet();

      setAddress(data.owner);

    } catch (err) {

      console.log(err);

    }

  }

  loadWallet();

  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:border-cyan-500 transition-all duration-300"
    >

      <div className="flex items-center justify-between">

        <h3 className="text-gray-400">
          Wallet
        </h3>

        <FaWallet className="text-cyan-400 text-xl" />

      </div>

      <p className="text-cyan-400 mt-3 font-semibold">
        {address.slice(0,6)}...
        {address.slice(-4)}
      </p>

    </motion.div>
  );
}

export default WalletCard;