const express = require("express");
const router = express.Router();

const { getWalletData } = require("../controllers/walletController");

router.get("/", getWalletData);

module.exports = router;