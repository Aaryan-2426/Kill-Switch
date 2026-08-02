import { FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";


function DailyLimitCard() {

  const [limit, setLimit] = useState("Loading...");

  useEffect(() => {

    async function loadLimit() {

      try {

        const res = await axios.get("http://localhost:5000/wallet");

        setLimit(res.data.dailyLimit);
      } catch (err) {

        console.log(err);

      }

    }

    loadLimit();

  }, []);

  return (

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:border-cyan-500 transition-all duration-300"
    >

      <div className="flex justify-between items-center">

        <h3 className="text-gray-300 font-semibold">
          Daily Limit
        </h3>

        <FaChartLine className="text-cyan-400 text-xl" />

      </div>

      <p className="text-cyan-400 text-2xl font-bold mt-4">
        {limit === "Loading..."
          ? "Loading..."
          : `${Number(limit).toFixed(0)} ETH`}
      </p>
    </motion.div>

  );

}

export default DailyLimitCard;