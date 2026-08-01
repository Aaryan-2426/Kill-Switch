import { FaExclamationTriangle } from "react-icons/fa";

function WarningCard() {
  return (
    <div className="bg-red-900/20 border border-red-600 rounded-xl p-6">
      <div className="flex items-center gap-3">
        <FaExclamationTriangle className="text-red-400 text-2xl" />

        <h2 className="text-red-400 text-xl font-bold">
          Warning
        </h2>
      </div>

      <p className="text-gray-300 mt-4">
        Activating the Kill Switch will immediately freeze all wallet
        transactions until manually restored.
      </p>
    </div>
  );
}

export default WarningCard;