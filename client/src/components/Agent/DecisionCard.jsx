function DecisionCard({ result }) {

    if (!result) {

        return (

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 text-gray-400">

                Submit a prompt to see the AI decision.

            </div>

        );

    }

    return (

        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">

            <h2 className="text-2xl font-bold mb-6">
                AI Decision
            </h2>

            <div className="space-y-3">

                <p>
                    <strong>Risk:</strong> {result.ai.risk}%
                </p>

                <p>
                    <strong>Decision:</strong> {result.ai.decision}
                </p>

                <p>
                    <strong>Reason:</strong> {result.ai.reason}
                </p>

                <p>
                    <strong>Policy:</strong>{" "}
                    {result.policy.allowed ? "PASS ✅" : "BLOCK ❌"}
                </p>

                <p>
                    <strong>Policy Reason:</strong> {result.policy.reason}
                </p>

                {result.autoFrozen && (
                    <div className="mt-6 p-4 rounded-lg bg-red-600 text-white text-center font-bold text-lg animate-pulse">
                        🚨 AI ACTIVATED EMERGENCY KILL SWITCH 🚨
                    </div>
                )}
                {result.ai.risk >= 80 && (
                    <div className="mt-6 p-4 rounded-lg bg-red-600 text-white text-center font-bold">
                        🚨 HIGH RISK DETECTED - WALLET IS PROTECTED 🚨
                    </div>
                )}
            </div>

        </div>

    );

}

export default DecisionCard;