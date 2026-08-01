import MainLayout from "../layouts/MainLayout";
import TransactionHistory from "../components/Tables/TransactionHistory";

function Transactions() {
  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Transactions
        </h1>

        <p className="text-gray-400 mt-2">
          View recent wallet activity.
        </p>
      </div>

      <TransactionHistory />
    </MainLayout>
  );
}

export default Transactions;