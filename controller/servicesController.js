const ServicesModel=require('../models/ServicesModel');

module.exports.serv_post=async(req,res)=>{
    try {
        const newServ=new ServicesModel(req.body);
        const savedServ=await newServ.save();
        res.status(200).json(savedServ);
    } catch (err) {
        res.status(500).json(err+" couldn't save the service");
    }
}

module.exports.serv_get=async(req,res)=>{
    try {
        const allServices=await ServicesModel.find();
        res.status(200).json(allServices);
    } catch (err) {
        res.status(500).json(err+" couldn't get all services");
    }
}

