import { useEffect, useState } from "react";
import { getLogs } from "../../services/logService";

function ActivityLog() {

    const [logs, setLogs] = useState([]);

    useEffect(() => {

        async function loadLogs() {

            try {

                const data = await getLogs();

                setLogs(data.logs);

            } catch (err) {

                console.log(err);

            }

        }

        loadLogs();

    }, []);

    return (

        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">

            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Recent Activity
            </h2>

            <div className="space-y-4">

                {logs.map((log)=>(

                    <div
                        key={log._id}
                        className="border-b border-zinc-800 pb-3"
                    >

                        <p className="font-semibold text-cyan-400">

                            {log.action}

                        </p>

                        <p className="text-gray-400">

                            {log.description}

                        </p>

                        <p className="text-xs text-gray-500 mt-1">

                            {new Date(log.createdAt).toLocaleString()}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default ActivityLog;