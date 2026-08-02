import { useEffect, useState } from "react";
import axios from "axios";

function TransactionHistory() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    async function loadTransactions() {

      try {

        const res = await axios.get(
          "http://localhost:5000/transactions"
        );

        setTransactions(res.data.transactions);

      } catch (err) {

        console.log(err);

      }

    }

    loadTransactions();

  }, []);

  return (

    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Transaction History
        </h2>

        <div className="text-green-400 font-semibold">
            Live Blockchain Logs
        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-zinc-700">

              <th className="text-left py-3">Time</th>
              <th className="text-left">Event</th>
              <th className="text-left">Transaction</th>
              <th className="text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {transactions.map((tx, index) => (

              <tr
                key={index}
                className="border-b border-zinc-800 hover:bg-zinc-800"
              >

                <td className="py-4">
                  {new Date(tx.createdAt).toLocaleString()}
                </td>

                <td className="font-semibold">
                  {tx.description}
                </td>

                <td className="text-cyan-400 font-mono">
                  {tx.txHash
                    ? `${tx.txHash.slice(0,8)}...${tx.txHash.slice(-6)}`
                    : "--"}
                </td>

                <td>

              <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
              tx.action==="FREEZE"
              ?"bg-red-600 text-white"
              :tx.action==="UNFREEZE"
              ?"bg-green-600 text-white"
              :"bg-cyan-600 text-white"
              }`}
              >

              {tx.action || tx.status}

              </span>

              </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default TransactionHistory;