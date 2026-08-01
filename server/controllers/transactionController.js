const Transaction=require("../models/Transaction");

exports.getTransactions=async(req,res)=>{

const transactions=await Transaction.find().sort({
createdAt:-1
});

res.json({
success:true,
transactions
});

};
exports.saveTransaction = async (req, res) => {

    try{

        const transaction=await Transaction.create(req.body);

        res.json({
            success:true,
            transaction
        });

    }catch(err){

        res.status(500).json({
            success:false,
            message:err.message
        });

    }

};