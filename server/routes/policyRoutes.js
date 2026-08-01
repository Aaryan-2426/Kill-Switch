const express = require("express");
const router = express.Router();

const {
  getPolicy,
  updatePolicy,
} = require("../controllers/policyController");

router.get("/", getPolicy);

router.post("/update", updatePolicy);
const contract = require("../config/blockchain");

router.post("/limit", async (req, res) => {

    try {

        const { limit } = req.body;

        const tx = await contract.changeLimit(limit);

        await tx.wait();

        res.json({
            success: true,
            message: "Daily Limit Updated"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

module.exports = router;