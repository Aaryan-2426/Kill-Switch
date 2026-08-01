import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTransactions } from "../../services/transactionService";

function TransactionTable() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    async function loadTransactions() {

      try {

        const data = await getTransactions();

        setTransactions(data.transactions);

      } catch (err) {

        console.log(err);

      }

    }

    loadTransactions();

  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg mt-8"
    >

      <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Recent Transactions
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="border-b border-zinc-700">

            <tr>
              <th className="py-3">Action</th>
              <th>Description</th>
              <th>Time</th>
            </tr>

          </thead>

          <tbody>

{transactions.length === 0 ? (

<tr>
    <td colSpan="3" className="text-center py-6 text-gray-400">
        No Transactions Found
    </td>
</tr>

) : (

transactions.map((tx) => (
    <tr
        key={tx._id}
        className="border-b border-zinc-800 hover:bg-zinc-800 transition"
    >
        <td className="py-4">
            {tx.action}
        </td>

        <td>
            {tx.description}
        </td>

        <td>
            {new Date(tx.createdAt).toLocaleString()}
        </td>
    </tr>
))

)}

</tbody>

        </table>

      </div>

    </motion.div>
  );
}

export default TransactionTable;