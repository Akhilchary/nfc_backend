const ProductsModel=require('../models/ProductsModel');

module.exports.prod_post=async(req,res)=>{
    try{
        const newProd=new ProductsModel(req.body);
        const savedProd=await newProd.save();
        res.status(200).json(savedProd);
    }catch(err){
        res.status(500).json(err+ " "+"could not save product");
    }
}

module.exports.prod_get=async(req,res)=>{
    try{
        let allProds=await ProductsModel.find();
        res.status(200).json(allProds);
    }catch(err){
        res.status(500).json(err);
    }
}