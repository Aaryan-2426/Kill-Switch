const { analyzePrompt } = require("../agents/riskAgent");
const { checkPolicy } = require("../agents/policyEngine");
const contract = require("../config/blockchain");

const Transaction = require("../models/Transaction");
const Log = require("../models/Log");
const Alert = require("../models/Alert");

exports.analyze = async (req, res) => {

    try {

        const { receiver, amount, purpose } = req.body;

        const ai = analyzePrompt({
            receiver,
            amount,
            purpose
        });

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
        let transferHash = null;

            if (ai.decision === "ALLOW") {

                const walletMap = {
                    "Vendor Wallet": "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                    "Treasury Wallet": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
                    "Savings Wallet": "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
                };

                const { ethers } = require("ethers");

                const tx = await contract.secureTransfer(
                    walletMap[receiver],
                    ethers.parseEther(amount.toString())
                );

                await tx.wait();

                transferHash = tx.hash;

                await Transaction.create({
                    action: "TRANSFER",
                    description: `${amount} ETH sent to ${receiver}`,
                    txHash: tx.hash
                });

                await Log.create({
                    action: "TRANSFER",
                    description: `${amount} ETH sent`
                });

            }

        res.json({

            success: true,

            ai,

            policy,

            autoFrozen,

            transferHash

        });

    } catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};