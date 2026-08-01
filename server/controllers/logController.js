const Log = require("../models/Log");

exports.getLogs = async (req, res) => {

    try {

        const logs = await Log.find()
            .sort({ createdAt: -1 })
            .limit(10);

        res.json({
            success: true,
            logs
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};