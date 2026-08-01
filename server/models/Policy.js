const mongoose=require("mongoose");

const policySchema=new mongoose.Schema(
{
    dailyLimit:Number,
    frozen:Boolean
},
{
    timestamps:true
});

module.exports=mongoose.model(
    "Policy",
    policySchema
);