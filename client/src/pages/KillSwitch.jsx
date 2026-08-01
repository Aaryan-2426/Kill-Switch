import MainLayout from "../layouts/MainLayout";

import EmergencyButton from "../components/KillSwitch/EmergencyButton";
import StatusCard from "../components/KillSwitch/StatusCard";
import WarningCard from "../components/KillSwitch/WarningCard";
import ActivityLog from "../components/KillSwitch/ActivityLog";

function KillSwitch() {
  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
          Emergency Kill Switch
        </h1>

        <p className="text-gray-300 text-lg mt-2">
          Instantly freeze wallet activity during suspicious behavior.
        </p>
      </div>

      <EmergencyButton />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <StatusCard />
        <WarningCard />
      </div>

      <div className="mt-8">
        <ActivityLog />
      </div>
    </MainLayout>
  );
}

export default KillSwitch;