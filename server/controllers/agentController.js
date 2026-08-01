const { analyzePrompt } = require("../agents/riskAgent");
const { checkPolicy } = require("../agents/policyEngine");
const contract = require("../config/blockchain");

const Transaction = require("../models/Transaction");
const Log = require("../models/Log");
const Alert = require("../models/Alert");

exports.analyze = async (req, res) => {

    try {

        const { prompt } = req.body;

        const ai = analyzePrompt(prompt);

        const wallet = {
            frozen: await contract.frozen()
        };

        const policy = checkPolicy(wallet, ai);

        let autoFrozen = false;

        if (ai.risk >= 80 && !wallet.frozen) {

            const tx = await contract.freeze();

            await tx.wait();

            autoFrozen = true;

            await Transaction.create({
                action: "AUTO FREEZE",
                description: ai.reason,
                txHash: tx.hash
            });

            await Log.create({
                action: "AUTO FREEZE",
                description: ai.reason
            });

            await Alert.create({
                level: "HIGH",
                message: `AI blocked transaction: ${ai.reason}`
            });

        }

        res.json({

            success: true,

            ai,

            policy,

            autoFrozen

        });

    } catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};