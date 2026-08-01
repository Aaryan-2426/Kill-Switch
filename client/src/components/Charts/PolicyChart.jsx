import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { policyData } from "../../data/dummyData";

const COLORS = ["#06b6d4", "#ef4444"];

function PolicyChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">
        Policy Usage
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={policyData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {policyData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default PolicyChart;