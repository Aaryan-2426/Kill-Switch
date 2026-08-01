const contract = require("../config/blockchain");
const Policy = require("../models/Policy");
const Log = require("../models/Log");

exports.getPolicy = async (req, res) => {
  try {
    const dailyLimit = await contract.dailyLimit();
    const frozen = await contract.frozen();

    res.json({
      success: true,
      dailyLimit: dailyLimit.toString(),
      frozen,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updatePolicy = async (req, res) => {
  try {

    const { limit } = req.body;

    const tx = await contract.changeLimit(limit);

    await tx.wait();

    await Policy.create({
      dailyLimit: limit,
      frozen: await contract.frozen(),
    });

    await Log.create({
      action: "POLICY_UPDATE",
      description: `Daily limit changed to ${limit}`,
    });

    res.json({
      success: true,
      message: "Policy Updated",
      txHash: tx.hash,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};