import { useState } from "react";
import { analyzePrompt } from "../../services/agentService";
import toast from "react-hot-toast";

function PromptBox({ setResult }) {

    const [receiver, setReceiver] = useState("");
    const [amount, setAmount] = useState("");
    const [purpose, setPurpose] = useState("");

    const submit = async () => {

        if (!receiver || !amount || !purpose) {
            toast.error("Fill all fields");
            return;
        }
        try {

            const data = await analyzePrompt({
                receiver,
                amount,
                purpose
            });

            setResult(data);

        } catch (err) {

            toast.error(err.message);

        }

    };

    return (

            <div
            className="
                bg-zinc-900
                rounded-2xl
                border
                border-cyan-500/20
                shadow-xl
                shadow-black/40
                p-8
            "
            >
            <div className="mb-4">

            <label className="text-gray-300">
                Receiver Wallet
            </label>

            <select
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                className="
                    w-full
                    mt-2
                    p-4
                    rounded-xl
                    bg-zinc-950
                    border
                    border-zinc-700
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-500/20
                    outline-none
                    transition
                    ">

                <option value="">Select Wallet</option>

                <option>Vendor Wallet</option>

                <option>Treasury Wallet</option>

                <option>Savings Wallet</option>

                <option>Unknown Wallet</option>

            </select>

            </div>
            <div className="mb-4">

                <label className="text-gray-300">
                Amount
                </label>

                <input

                type="number"

                value={amount}

                onChange={(e)=>setAmount(e.target.value)}

                placeholder="50"

                className="w-full mt-2 p-3 rounded-lg bg-zinc-950 border border-zinc-700"

                />

            </div>
            <div className="mb-4">

                <label className="text-gray-300">
                Purpose
                </label>

                <input

                value={purpose}

                onChange={(e)=>setPurpose(e.target.value)}

                placeholder="Monthly Salary"

                className="w-full mt-2 p-3 rounded-lg bg-zinc-950 border border-zinc-700"   

                />

            </div>
            <button
            onClick={submit}
            className="
            w-full
            mt-6
            py-4
            rounded-xl
            font-bold
            text-lg
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            hover:from-cyan-400
            hover:to-blue-500
            shadow-lg
            shadow-cyan-500/30
            hover:shadow-cyan-400/50
            transition-all
            duration-300
            hover:scale-[1.02]
            "
        >
            🛡 Execute Secure Transfer
        </button>

        </div>

    );

}

export default PromptBox;