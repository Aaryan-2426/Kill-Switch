import { FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";

function AllowedWallets() {

    return (

        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:shadow-cyan-500/40 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300"
>

            <div className="flex justify-between">

                <h3 className="text-gray-400">
                    Allowed Wallets
                </h3>

                <FaUserShield className="text-cyan-400 text-xl"/>

            </div>

            <div className="mt-4 space-y-2">

                <p>Vendor Wallet</p>

                <p>Treasury Wallet</p>

                <p>Savings Wallet</p>

            </div>

        </motion.div>

    );

}

export default AllowedWallets;