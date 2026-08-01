import { FaRobot } from "react-icons/fa";

function AgentStatus() {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          AI Agent Status
        </h2>

        <FaRobot className="text-cyan-400 text-2xl" />
      </div>

      <div className="mt-6 space-y-3">
        <p>
          Status:
          <span className="text-green-400 font-bold ml-2">
            Running
          </span>
        </p>

        <p>
          Confidence:
          <span className="text-cyan-400 font-bold ml-2">
            97%
          </span>
        </p>

        <p>
          Threat Level:
          <span className="text-yellow-400 font-bold ml-2">
            Low
          </span>
        </p>

        <p>
          Last Scan:
          <span className="text-gray-300 ml-2">
            5 seconds ago
          </span>
        </p>
      </div>
    </div>
  );
}

export default AgentStatus;