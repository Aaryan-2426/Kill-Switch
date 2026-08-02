import { FaCoins } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getWallet } from "../../services/walletService";

function RemainingCard() {

    const [remaining, setRemaining] = useState("Loading...");

    useEffect(() => {

        async function loadData() {

            try {

                const data = await getWallet();

                setRemaining(data.dailyLimit);

            } catch (err) {

                console.log(err);

            }

        }

        loadData();

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
                <h3 className="text-gray-400">
                    Remaining Budget
                </h3>

                <FaCoins className="text-green-400 text-xl" />
            </div>

           <p className="text-green-400 mt-3 font-bold text-xl">

                {remaining === "Loading..." ? (

                <div className="animate-pulse h-6 w-24 rounded bg-zinc-700" />

                ) : (

                `${Number(remaining).toFixed(0)} ETH`

                )}

            </p>

        </motion.div>

    );

}

export default RemainingCard;