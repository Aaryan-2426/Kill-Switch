function DecisionCard({ result }) {

    if (!result) {

        return (

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 text-gray-400">

                Submit a prompt to see the AI decision.

            </div>

        );

    }

    return (

        <div className="bg-zinc-900 rounded-xl p-8 border border-cyan-500/20 shadow-xl">

    <h2 className="text-3xl font-bold mb-8 text-cyan-400">
        🛡 AI Security Report
    </h2>

    <div className="space-y-5">

        <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-gray-400">Threat Score</span>

            <span className={`font-bold ${
                result.ai.risk > 70
                ? "text-red-500"
                : result.ai.risk > 30
                ? "text-yellow-400"
                : "text-green-400"
            }`}>
                {result.ai.risk}%
            </span>
        </div>

        <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-gray-400">AI Decision</span>

            <span className={`font-bold ${
                result.ai.decision==="ALLOW"
                ? "text-green-400"
                : "text-red-500"
            }`}>
                {result.ai.decision==="ALLOW"
                ? "✅ APPROVED"
                : "❌ BLOCKED"}
            </span>
        </div>

        <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-gray-400">Reason</span>

            <span className="font-semibold">
                {result.ai.reason}
            </span>
        </div>

        <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-gray-400">
                Policy Engine
            </span>

            <span className={`font-bold ${
                result.policy.allowed
                ? "text-green-400"
                : "text-red-500"
            }`}>
                {result.policy.allowed
                ? "PASSED"
                : "BLOCKED"}
            </span>
        </div>

        <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-gray-400">
                Policy Reason
            </span>

            <span>
                {result.policy.reason}
            </span>
        </div>

        {result.transferHash && (

            <div className="mt-5">

                <p className="text-gray-400 mb-2">
                    Transaction Hash
                </p>

                <div className="bg-zinc-950 rounded-lg p-3 break-all text-cyan-400 text-sm">
                    {result.transferHash}
                </div>

            </div>

        )}

        {result.autoFrozen && (

            <div className="mt-8 p-5 rounded-xl bg-red-600 text-center text-xl font-bold animate-pulse">

                🚨 EMERGENCY KILL SWITCH ACTIVATED

            </div>

        )}

    </div>

</div>

    );

}

export default DecisionCard;