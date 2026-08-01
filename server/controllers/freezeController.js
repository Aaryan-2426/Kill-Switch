const contract = require("../config/blockchain");
const Log = require("../models/Log");
const Alert = require("../models/Alert");
const Transaction = require("../models/Transaction"); 

exports.freezeWallet = async (req, res) => {
  try {
    const tx = await contract.freeze();
console.log("Freeze transaction sent");

await tx.wait();
console.log("Transaction confirmed");

const saved = await Transaction.create({
  action: "FREEZE",
  description: "Wallet frozen by owner",
  txHash: tx.hash
});

console.log("Saved Transaction:", saved);

    await Log.create({
      action: "FREEZE",
      description: "Wallet frozen by owner",
    });

    await Alert.create({
      level: "HIGH",
      message: "Emergency Kill Switch Activated",
    });

    res.json({
      success: true,
      message: "Wallet Frozen",
      txHash: tx.hash,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.unfreezeWallet = async (req, res) => {
  try {
    const tx = await contract.unfreeze();
    await tx.wait();
    await Transaction.create({
    action: "UNFREEZE",
    description: "Wallet unfrozen by owner",
    txHash: tx.hash
    });
    await Log.create({
      action: "UNFREEZE",
      description: "Wallet unfrozen by owner",
    });

    res.json({
      success: true,
      message: "Wallet Unfrozen",
      txHash: tx.hash,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};