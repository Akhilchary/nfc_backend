const mongoose=require('mongoose');

const servicesSchema=new mongoose.Schema({
    serviceName:{
        type:String,
        required:true
    },
    serviceImage:{
        type:String,
        required:true
    },
    serviceDesc:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('service',servicesSchema);