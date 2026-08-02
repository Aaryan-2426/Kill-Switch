exports.analyzePrompt = (tx) => {

    const { receiver, amount, purpose } = tx;

    let risk = 5;
    let decision = "ALLOW";
    let reason = "Transaction looks safe";

    // Allowed wallets
    const allowedWallets = [
        "Vendor Wallet",
        "Treasury Wallet",
        "Savings Wallet"
    ];

    // Unknown wallet
    if (!allowedWallets.includes(receiver)) {

        risk = 95;
        decision = "BLOCK";
        reason = "Receiver not in allowlist";

    }

    // Daily spending limit
    else if (Number(amount) > 100) {

        risk = 90;
        decision = "BLOCK";
        reason = "Daily limit exceeded";

    }

    // Suspicious purpose
    else if (
        purpose.toLowerCase().includes("hack") ||
        purpose.toLowerCase().includes("scam") ||
        purpose.toLowerCase().includes("steal") ||
        purpose.toLowerCase().includes("attack")
    ) {

        risk = 92;
        decision = "BLOCK";
        reason = "Suspicious transaction purpose";

    }

    return {

        risk,
        decision,
        reason

    };

};