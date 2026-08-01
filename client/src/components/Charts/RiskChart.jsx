import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getDashboardStats } from "../../services/dashboardService";
import { motion } from "framer-motion";

function RiskChart() {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function loadChart() {

            try {

                const stats = await getDashboardStats();

                setData(stats.threatTrend);

            } catch (err) {

                console.log(err);

            }

        }

        loadChart();

    }, []);

    return (
        <motion.div
initial={{ opacity:0, x:-40 }}
animate={{ opacity:1, x:0 }}
transition={{ duration:0.6 }}
>

        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">

            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Threat Trend
            </h2>

            <ResponsiveContainer width="100%" height={300}>

                <LineChart data={data}>

                    <XAxis dataKey="time"/>

                    <YAxis/>

                    <Tooltip/>

                    <Line
                        type="monotone"
                        dataKey="risk"
                        stroke="#ef4444"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
        </motion.div>

    );

}

export default RiskChart;