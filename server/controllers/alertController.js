const Alert = require("../models/Alert");

exports.getAlerts = async (req, res) => {

    try {

        const alerts = await Alert.find()
            .sort({ createdAt: -1 })
            .limit(10);

        res.json({
            success: true,
            alerts
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};