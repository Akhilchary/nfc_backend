const CustomerModel=require('../models/CustomerModel');
module.exports.cust_post=async(req,res)=>{
    try {
        const newCust=new CustomerModel(req.body);
        const savedCust=await newCust.save();
        res.status(200).json(savedCust);
    } catch (err) {
        res.status(500).json(err+" "+"could not save new customer");
    }
}

module.exports.cust_get=async(req,res)=>{
    try {
        const allCust =await CustomerModel.find();
        res.status(200).json(allCust);
    } catch (err) {
        res.status(500).json(err+" could not get all customers");
    }
}
