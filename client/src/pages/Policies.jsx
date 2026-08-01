import MainLayout from "../layouts/MainLayout";

import DailyLimitCard from "../components/Cards/DailyLimitCard";
import AllowedWalletCard from "../components/Cards/AllowedWalletCard";
import FreezeCard from "../components/Cards/FreezeCard";
import ProtectionCard from "../components/Cards/ProtectionCard";
import PolicyControls from "../components/Common/PolicyControls";

function Policies() {
  return (
    <MainLayout>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Policies</h1>

        <p className="text-gray-400 mt-2">
          Configure wallet security policies and protection rules.
        </p>
      </div>

      {/* Policy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <DailyLimitCard />
        <AllowedWalletCard />
        <FreezeCard />
        <ProtectionCard />
      </div>
      <PolicyControls />
    </MainLayout>
  );
}

export default Policies;