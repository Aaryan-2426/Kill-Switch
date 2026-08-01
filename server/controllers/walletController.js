const contract = require("../config/blockchain");

exports.getWallet = async (req, res) => {
  try {
    const owner = await contract.owner();

    const frozen = await contract.frozen();

    const dailyLimit = await contract.dailyLimit();

    res.json({
      success: true,
      owner,
      frozen,
      dailyLimit: dailyLimit.toString(),
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};