import MainLayout from "../layouts/MainLayout";
import WalletCard from "../components/Cards/WalletCard";
import BalanceCard from "../components/Cards/BalanceCard";
import StatusCard from "../components/Cards/StatusCard";
import PolicyCard from "../components/Cards/PolicyCard";
import RiskCard from "../components/Cards/RiskCard";
import RiskChart from "../components/Charts/RiskChart";
import TransactionChart from "../components/Charts/TransactionChart";
import PolicyChart from "../components/Charts/PolicyChart";
import TransactionTable from "../components/Tables/TransactionTable";
import RemainingCard from "../components/Cards/RemainingCard";
import ThreatCard from "../components/Cards/ThreatCard";
import AllowedWallets from "../components/Cards/AllowedWallets";
import ActivityLog from "../components/Dashboard/ActivityLog";
import AlertPanel from "../components/Dashboard/AlertPanel";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <MainLayout>
      <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}>


      <div className="mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Dashboard
        </h1>

        <p className="text-gray-300 text-lg mt-2">
          Monitor wallet security and AI protection in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        <WalletCard />
        <BalanceCard />
        <RemainingCard />
        <PolicyCard />
        <AllowedWallets />
        <ThreatCard />
        <StatusCard />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-12">
        <RiskChart />
        <TransactionChart />
      </div>

      <div className="mt-6">
        <PolicyChart />
      </div>


      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">

        <ActivityLog />

        <AlertPanel />

      </div>

      <div className="mt-10">
        <TransactionTable />
      </div>
    </motion.div>

    </MainLayout>
  );
}

export default Dashboard;