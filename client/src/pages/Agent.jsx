import MainLayout from "../layouts/MainLayout";
import PromptBox from "../components/Agent/PromptBox";
import DecisionCard from "../components/Agent/DecisionCard";
import { useState } from "react";

function Agent() {

    const [result, setResult] = useState(null);

    return (

        <MainLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-cyan-400">
                    AI Security Agent
                </h1>

                <p className="text-gray-400 mt-2">
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