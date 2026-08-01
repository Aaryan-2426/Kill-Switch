import MainLayout from "../layouts/MainLayout";
import PromptBox from "../components/Agent/PromptBox";
import DecisionCard from "../components/Agent/DecisionCard";
import { useState } from "react";

function Agent() {

    const [result, setResult] = useState(null);

    return (

        <MainLayout>

            <div className="mb-8">

                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    AI Security Agent
                </h1>

                <p className="text-gray-300 text-lg mt-2">
                    AI analyzes every transaction before execution.
                </p>

            </div>

            <PromptBox setResult={setResult} />

            <div className="mt-8">

                <DecisionCard result={result} />

            </div>

        </MainLayout>

    );

}

export default Agent;