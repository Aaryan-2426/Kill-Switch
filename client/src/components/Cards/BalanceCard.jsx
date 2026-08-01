import { FaEthereum } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrowserProvider, formatEther } from "ethers";

function BalanceCard() {

  const [balance, setBalance] = useState("Loading...");

  useEffect(() => {

    async function loadBalance() {

      try {

        if (!window.ethereum) return;

        const provider = new BrowserProvider(window.ethereum);

        const signer = await provider.getSigner();

        const address = await signer.getAddress();

        const bal = await provider.getBalance(address);
        console.log(address);
        console.log(formatEther(bal));

        setBalance(Number(formatEther(bal)).toFixed(4));

      } catch (err) {
        console.log(err);
      }

    }

    loadBalance();

  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:border-cyan-500 transition-all duration-300"
    >

      <div className="flex items-center justify-between">
        <h3 className="text-gray-400">Balance</h3>
        <FaEthereum className="text-cyan-400 text-xl" />
      </div>

      <p className="text-cyan-400 mt-3 font-semibold">
        {balance} ETH
      </p>

    </motion.div>
  );
}

export default BalanceCard;