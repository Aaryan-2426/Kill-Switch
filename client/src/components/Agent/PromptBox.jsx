import { useState } from "react";
import { analyzePrompt } from "../../services/agentService";

function PromptBox({ setResult }) {

    const [prompt, setPrompt] = useState("");

    const submit = async () => {

        if (!prompt.trim()) return;

        try {

            const data = await analyzePrompt(prompt);

            setResult(data);

        } catch (err) {

            alert(err.message);

        }

    };

    return (

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">

            <textarea

                rows={5}

                value={prompt}

                onChange={(e) => setPrompt(e.target.value)}

                placeholder="Example: Pay Vendor 50 USDC"

                className="w-full bg-zinc-950 rounded-lg p-4 text-white border border-zinc-700"

            />

            <button

                onClick={submit}

                className="mt-4 px-6 py-3 bg-cyan-500 rounded-lg text-black font-semibold hover:bg-cyan-400"

            >
                Analyze
            </button>

        </div>

    );

}

export default PromptBox;