const contract = require("../config/blockchain");
const Log = require("../models/Log");
const Alert = require("../models/Alert");

exports.freezeWallet = async (req, res) => {
  try {
    const tx = await contract.freeze();
    await tx.wait();

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