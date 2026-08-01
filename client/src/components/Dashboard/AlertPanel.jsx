import { useEffect, useState } from "react";
import { getAlerts } from "../../services/alertService";

function AlertPanel() {

    const [alerts, setAlerts] = useState([]);

    useEffect(() => {

        async function loadAlerts() {

            try {

                const data = await getAlerts();

                setAlerts(data.alerts);

            } catch (err) {

                console.log(err);

            }

        }

        loadAlerts();

    }, []);

    return (

        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">

            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Alerts
            </h2>

            <div className="space-y-4">

                {alerts.map((alert)=>(

                    <div
                        key={alert._id}
                        className="border-b border-zinc-800 pb-3"
                    >

                        <p className="text-red-400 font-bold">

                            {alert.level}

                        </p>

                        <p className="text-gray-400">

                            {alert.message}

                        </p>

                        <p className="text-xs text-gray-500 mt-1">

                            {new Date(alert.createdAt).toLocaleString()}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default AlertPanel;