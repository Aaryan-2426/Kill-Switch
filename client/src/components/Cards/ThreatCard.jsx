import { FaRadiation } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

function ThreatCard() {

    const [risk] = useState(5);

    let level = "LOW";
    let color = "text-green-400";

    if (risk >= 40)
    {
        level = "MEDIUM";
        color = "text-yellow-400";
    }

    if (risk >= 80)
    {
        level = "HIGH";
        color = "text-red-400";
    }

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
                    Threat Level
                </h3>

                <FaRadiation className={color + " text-xl"} />

            </div>

            <p className={color + " mt-3 font-bold text-xl"}>

                {level}

            </p>

        </motion.div>

    );

}

export default ThreatCard;