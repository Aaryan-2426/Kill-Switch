import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getDashboardStats } from "../../services/dashboardService";
import { motion } from "framer-motion";

function TransactionChart() {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function loadChart() {

            try {

                const stats = await getDashboardStats();

                setData(stats.dailySpending);

            } catch (err) {

                console.log(err);

            }

        }

        loadChart();

    }, []);

    return (
        <motion.div
initial={{ opacity:0, x:40 }}
animate={{ opacity:1, x:0 }}
transition={{ duration:0.6 }}
>

        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">

            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Daily Spending
            </h2>

            <ResponsiveContainer width="100%" height={300}>

                <BarChart data={data}>

                    <XAxis dataKey="day"/>

                    <YAxis/>

                    <Tooltip/>

                    <Bar
                        dataKey="amount"
                        fill="#06b6d4"
                        radius={[5,5,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>
        </motion.div>

    );

}

export default TransactionChart;