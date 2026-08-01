import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { transactionData } from "../../data/dummyData";
import { motion } from "framer-motion";

function TransactionChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">
        Weekly Transaction Volume
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={transactionData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="day" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Bar dataKey="amount" fill="#06b6d4" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default TransactionChart;