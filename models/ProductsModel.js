const mongoose=require('mongoose');


const prodSchema=new mongoose.Schema({
    prodName:{
        type:String,
        required:true
    },
    prodImage:{
        type:String,
        required:true
    },
    prodDesc:{
        type:String,
        required:true
    }
});


module.exports=mongoose.model('prod',prodSchema);
