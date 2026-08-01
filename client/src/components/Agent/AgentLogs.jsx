function AgentLogs() {
  const logs = [
    "12:10 Wallet scanned",
    "12:15 Risk score updated",
    "12:18 AI approved transaction",
    "12:22 Suspicious wallet detected",
  ];

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-6">
        Live Logs
      </h2>

      <div className="space-y-4">
        {logs.map((log, index) => (
          <div
            key={index}
            className="border-b border-zinc-800 pb-3"
          >
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentLogs;