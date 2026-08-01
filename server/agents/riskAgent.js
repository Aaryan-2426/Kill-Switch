exports.analyzePrompt = (prompt) => {

    prompt = prompt.toLowerCase();

    let risk = 5;
    let decision = "ALLOW";
    let reason = "Normal Transaction";

    // Prompt Injection
    if (
        prompt.includes("ignore") ||
        prompt.includes("override") ||
        prompt.includes("bypass")
    ) {

        risk = 95;
        decision = "BLOCK";
        reason = "Prompt Injection";

    }

    // Huge transfer
    if (
        prompt.includes("5000") ||
        prompt.includes("10000")
    ) {

        risk = 90;
        decision = "BLOCK";
        reason = "High Value Transfer";

    }

    // Hacker wallet
    if (
        prompt.includes("hacker")
    ) {

        risk = 92;
        decision = "BLOCK";
        reason = "Unknown Receiver";

    }

    // Spam attack
    if (
        prompt.includes("20 transactions")
    ) {

        risk = 93;
        decision = "BLOCK";
        reason = "Transaction Spam";

    }

    return {

        risk,
        decision,
        reason

    };

};