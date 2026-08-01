exports.checkPolicy = (wallet, ai) => {

    if (wallet.frozen) {

        return {

            allowed: false,

            reason: "Wallet Frozen"

        };

    }

    if (ai.risk >= 80) {

        return {

            allowed: false,

            reason: ai.reason

        };

    }

    return {

        allowed: true,

        reason: "Policy Passed"

    };

};