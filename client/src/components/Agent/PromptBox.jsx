import { useState } from "react";
import { analyzePrompt } from "../../services/agentService";
import toast from "react-hot-toast";

function PromptBox({ setResult }) {

    const [prompt, setPrompt] = useState("");

    const submit = async () => {

        if (!prompt.trim()) return;

        try {

            const data = await analyzePrompt(prompt);

            setResult(data);

        } catch (err) {

            toast.error(err.message);

        }

    };

    return (

        <div className="bg-zinc-900 border border-cyan-500/20 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300">

            <textarea

                rows={5}

                value={prompt}

                onChange={(e) => setPrompt(e.target.value)}

                placeholder="Example: Pay Vendor 50 USDC"

                className="w-full bg-zinc-950 rounded-lg p-4 text-white border border-zinc-700"

            />

            <button

                onClick={submit}

                className="bg-gradient-to-r from-cyan-500 to-blue-600
hover:from-cyan-400 hover:to-blue-500
hover:scale-105
transition-all duration-300"

            >
                Analyze
            </button>

        </div>

    );

}

export default PromptBox;