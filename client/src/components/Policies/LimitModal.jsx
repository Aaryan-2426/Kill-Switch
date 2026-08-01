import { useState } from "react";
import { updateLimit } from "../../services/policyService";
import toast from "react-hot-toast";

function LimitModal({ open, onClose }) {
  const [limit, setLimit] = useState("");

  if (!open) return null;

  async function handleUpdate() {
    try {
      await updateLimit(limit);

      toast.success("Daily Limit Updated");

      onClose();
      window.location.reload();

    } catch (err) {
      toast.error("Update Failed");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-zinc-900 p-8 rounded-xl w-96 border border-cyan-500">

        <h2 className="text-2xl font-bold mb-6">
          Update Daily Limit
        </h2>

        <input
          type="number"
          placeholder="Enter New Limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
        />

        <div className="flex justify-end gap-4 mt-6">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            className="px-5 py-2 rounded bg-cyan-500"
          >
            Update
          </button>

        </div>

      </div>

    </div>
  );
}

export default LimitModal;