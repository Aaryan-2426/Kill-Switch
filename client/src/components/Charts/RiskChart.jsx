import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { riskData } from "../../data/dummyData";
import { motion } from "framer-motion";

function RiskChart() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg">
    
      <h2 className="text-xl font-semibold mb-4 text-white">
        Weekly Risk Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={riskData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="day" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="risk"
            stroke="#06b6d4"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default RiskChart;