const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
{
    action: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    txHash: {
        type: String,
        default: ""
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(
    "Transaction",
    transactionSchema
);