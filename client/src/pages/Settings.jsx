import MainLayout from "../layouts/MainLayout";

import NetworkCard from "../components/Common/NetworkCard";
import WalletSettingsCard from "../components/Common/WalletSettingsCard";
import ThemeCard from "../components/Common/ThemeCard";
import NotificationCard from "../components/Common/NotificationCard";

function Settings() {
  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Configure application preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <NetworkCard />
        <WalletSettingsCard />
        <ThemeCard />
        <NotificationCard />
      </div>
    </MainLayout>
  );
}

export default Settings;