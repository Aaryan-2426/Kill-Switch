import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { getDashboardStats } from "../../services/dashboardService";
import { motion } from "framer-motion";

function PolicyChart() {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function loadChart() {

            try {

                const stats = await getDashboardStats();

                setData([
                    {
                        name: "Allowed",
                        value: stats.allowed
                    },
                    {
                        name: "Blocked",
                        value: stats.blocked
                    }
                ]);

            } catch (err) {

                console.log(err);

            }

        }

        loadChart();

    }, []);

    const COLORS = ["#22c55e", "#ef4444"];

    return (
        <motion.div
initial={{ opacity:0, y:30 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:0.6 }}
>
        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">

            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                Allowed vs Blocked

            </h2>

            <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                    >

                        {data.map((entry,index)=>(

                            <Cell
                                key={index}
                                fill={COLORS[index]}
                            />

                        ))}

                    </Pie>

                    <Tooltip/>

                </PieChart>

            </ResponsiveContainer>

        </div>
        </motion.div>

    );

}

export default PolicyChart;