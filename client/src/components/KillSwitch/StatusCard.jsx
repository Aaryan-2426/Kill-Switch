import { FaShieldAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getWallet } from "../../services/walletService";

function StatusCard() {

  const [frozen, setFrozen] = useState(false);

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
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Wallet Status
        </h2>

        <FaShieldAlt
          className={`text-2xl ${
            frozen ? "text-red-400" : "text-green-400"
          }`}
        />

      </div>

      <div className="mt-6">

        <span
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            frozen
              ? "bg-red-500/20 text-red-400"
              : "bg-green-500/20 text-green-400"
          }`}
        >
          {frozen ? "🔴 Frozen" : "🟢 Protected"}
        </span>

      </div>

    </div>
  );
}

export default StatusCard;