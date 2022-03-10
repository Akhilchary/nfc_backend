const mongoose=require('mongoose');


const custSchema=new mongoose.Schema({
    custName:{
        type:String,
        required:true
    },
    custImage:{
        type:String,
        required:true
    },
    custDesc:{
        type:String,
        required:true
    }
});


module.exports=mongoose.model('cust',custSchema);
