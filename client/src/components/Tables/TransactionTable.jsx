import { transactions } from "../../data/dummyData";
import { motion } from "framer-motion";

function TransactionTable() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg mt-8">
      <h2 className="text-xl font-semibold mb-6 text-white">
        Recent Transactions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead className="border-b border-zinc-700">

            <tr>
              <th className="py-3">Time</th>
              <th>Amount</th>
              <th>Receiver</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {transactions.map((tx) => (

              <tr
                key={tx.id}
                className="border-b border-zinc-800 hover:bg-zinc-800 transition"
              >

                <td className="py-4">{tx.time}</td>

                <td>{tx.amount}</td>

                <td>{tx.receiver}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm
                    ${
                      tx.status === "Success"
                        ? "bg-green-500/20 text-green-400"
                        : tx.status === "Pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {tx.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </motion.div>
  );
}

export default TransactionTable;