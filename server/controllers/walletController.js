const contract = require("../config/blockchain");
const { ethers } = require("ethers");

exports.getWalletData = async (req, res) => {
  try {
    const owner = await contract.owner();
    const frozen = await contract.frozen();
    const dailyLimit = await contract.dailyLimit();

    const balance = await contract.runner.provider.getBalance(owner);

    res.json({
      success: true,
      owner,
      frozen,
      dailyLimit: dailyLimit.toString(),
      balance: ethers.formatEther(balance),
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};