function ActivityLog() {
  const logs = [
    {
      time: "10:30 AM",
      action: "Wallet Protected",
    },
    {
      time: "11:45 AM",
      action: "Policy Updated",
    },
    {
      time: "12:15 PM",
      action: "Emergency Check",
    },
  ];

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-6">
        Recent Activity
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-zinc-700">
            <th className="text-left py-3">Time</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log, index) => (
            <tr
              key={index}
              className="border-b border-zinc-800"
            >
              <td className="py-4">{log.time}</td>
              <td>{log.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActivityLog;