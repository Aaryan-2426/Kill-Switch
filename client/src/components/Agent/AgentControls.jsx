import { FaPlay, FaStop } from "react-icons/fa";

function AgentControls() {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-6">
        Agent Controls
      </h2>

      <div className="flex gap-4">
        <button className="flex-1 bg-green-500 hover:bg-green-600 py-3 rounded-lg font-bold flex justify-center items-center gap-2">
          <FaPlay />
          Start Agent
        </button>

        <button className="flex-1 bg-red-500 hover:bg-red-600 py-3 rounded-lg font-bold flex justify-center items-center gap-2">
          <FaStop />
          Stop Agent
        </button>
      </div>
    </div>
  );
}

export default AgentControls;