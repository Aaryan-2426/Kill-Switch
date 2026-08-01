import { FaBell } from "react-icons/fa";
import { settingsData } from "../../data/dummyData";

function NotificationCard() {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-400">Notifications</h3>
        <FaBell className="text-red-400 text-xl" />
      </div>

      <p className="text-red-400 text-xl font-bold mt-4">
        {settingsData.notifications}
      </p>
    </div>
  );
}

export default NotificationCard;