const Transaction = require("../models/Transaction");

exports.getDashboardStats = async (req, res) => {

    try {

        const total = await Transaction.countDocuments();

        const blocked = await Transaction.countDocuments({
            action: "AUTO FREEZE"
        });

        const allowed = total - blocked;

        res.json({

            success: true,

            total,

            allowed,

            blocked,

            dailySpending: [
                { day: "Mon", amount: 20 },
                { day: "Tue", amount: 35 },
                { day: "Wed", amount: 10 },
                { day: "Thu", amount: 45 },
                { day: "Fri", amount: 15 },
                { day: "Sat", amount: 60 },
                { day: "Sun", amount: 25 }
            ],

            threatTrend: [
                { time: "Morning", risk: 15 },
                { time: "Afternoon", risk: 25 },
                { time: "Evening", risk: 90 },
                { time: "Night", risk: 20 }
            ]

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};