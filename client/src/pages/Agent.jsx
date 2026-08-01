import MainLayout from "../layouts/MainLayout";

import AgentStatus from "../components/Agent/AgentStatus";
import AgentControls from "../components/Agent/AgentControls";
import AgentLogs from "../components/Agent/AgentLogs";

function Agent() {
  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          AI Security Agent
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor wallet activity using AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AgentStatus />
        <AgentControls />
      </div>

      <div className="mt-8">
        <AgentLogs />
      </div>
    </MainLayout>
  );
}

export default Agent;