const express=require('express');
const dotenv = require("dotenv");
const mongoose=require("mongoose");
const prodRoute=require('./routes/prodRoute');
const custRoute=require('./routes/custRoute');
const servicesRoute=require('./routes/servicesRoute');
const userRoute=require('./routes/userRoute');


const app=express();

app.use(express.json());

dotenv.config();



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( console.log("connected to mongodb")).catch((err)=>console.log(err));



app.listen(3030,()=>{
    console.log("server is listening on port 3030");
})

app.use('/api/prod/',prodRoute);
app.use('/api/cust/',custRoute);
app.use('/api/service/',servicesRoute);
app.use('/api/auth/',userRoute)