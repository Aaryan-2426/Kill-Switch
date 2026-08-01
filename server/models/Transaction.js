const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
{
    to:String,
    amount:Number,
    txHash:String,
    status:String
},
{
    timestamps:true
});

module.exports = mongoose.model(
    "Transaction",
    transactionSchema
);