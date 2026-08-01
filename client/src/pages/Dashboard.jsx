import WalletCard from "../components/Cards/WalletCard";
import BalanceCard from "../components/Cards/BalanceCard";
import StatusCard from "../components/Cards/StatusCard";
import PolicyCard from "../components/Cards/PolicyCard";
import RiskCard from "../components/Cards/RiskCard";
import RiskChart from "../components/Charts/RiskChart";
import TransactionChart from "../components/Charts/TransactionChart";
import PolicyChart from "../components/Charts/PolicyChart";
import TransactionTable from "../components/Tables/TransactionTable";

function Dashboard() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor wallet security and AI protection in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <WalletCard />
        <BalanceCard />
        <StatusCard />
        <PolicyCard />
        <RiskCard />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">
        <RiskChart />
        <TransactionChart />
      </div>

      <div className="mt-6">
        <PolicyChart />
      </div>

      <TransactionTable />
    </>
  );
}

export default Dashboard;