const express = require("express");

const router = express.Router();

const {
    freezeWallet,
    unfreezeWallet,
} = require("../controllers/freezeController");

router.post("/freeze", freezeWallet);

router.post("/unfreeze", unfreezeWallet);

module.exports = router;