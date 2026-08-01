const express = require("express");

const router = express.Router();

const {
  getTransactions,
  saveTransaction,
} = require("../controllers/transactionController");

router.get("/", getTransactions);

router.post("/", saveTransaction);

module.exports = router;