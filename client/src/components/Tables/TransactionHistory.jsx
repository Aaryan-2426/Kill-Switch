import { transactions } from "../../data/dummyData";

function TransactionHistory() {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Transaction History
        </h2>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-black font-semibold">
          Export
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-3">Time</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Receiver</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-zinc-800 hover:bg-zinc-800"
              >
                <td className="py-4">{tx.time}</td>
                <td>{tx.amount}</td>
                <td>{tx.receiver}</td>
                <td>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionHistory;