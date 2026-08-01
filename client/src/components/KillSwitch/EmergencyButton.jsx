import { motion } from "framer-motion";
import { FaPowerOff } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

function EmergencyButton() {

  const [loading, setLoading] = useState(false);

  const freezeWallet = async () => {

    try {

      setLoading(true);

      const res = await axios.post("http://localhost:5000/freeze");

      alert(res.data.message);
      window.location.reload();

    } catch (err) {

      alert(err.response?.data?.message || err.message);

    } finally {

      setLoading(false);

    }

  };

  const unfreezeWallet = async () => {

    try {

      setLoading(true);

      const res = await axios.post("http://localhost:5000/unfreeze");

      alert(res.data.message);
      window.location.reload();

    } catch (err) {

      alert(err.response?.data?.message || err.message);

    } finally {

      setLoading(false);

    }

  };

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
        onClick={freezeWallet}
        disabled={loading}
        className="w-52 h-52 rounded-full bg-red-600 hover:bg-red-700 text-white flex flex-col items-center justify-center shadow-2xl"
      >

        <FaPowerOff className="text-6xl mb-4" />

        <span className="text-xl font-bold">
          {loading ? "WAIT..." : "FREEZE"}
        </span>

        <span className="text-sm">
          WALLET
        </span>

      </motion.button>

      <button
        onClick={unfreezeWallet}
        className="mt-6 px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white"
      >
        UNFREEZE
      </button>

      <p className="text-red-400 mt-6 text-lg">
        Emergency Kill Switch
      </p>

    </div>
  );
}

export default EmergencyButton;