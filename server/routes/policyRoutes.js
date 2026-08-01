const express = require("express");
const router = express.Router();

const {
  getPolicy,
  updatePolicy,
} = require("../controllers/policyController");

router.get("/", getPolicy);

router.post("/update", updatePolicy);

module.exports = router;