const express=require('express');
const dotenv = require("dotenv");
const cors = require('cors')
const mongoose=require("mongoose");
const prodRoute=require('./routes/prodRoute');
const custRoute=require('./routes/custRoute');
const servicesRoute=require('./routes/servicesRoute');
const userRoute=require('./routes/userRoute');


const app=express();

app.use(cors({ origin: true }));


app.use(express.json());
app.use(cors());

dotenv.config();



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( console.log("connected to mongodb")).catch((err)=>console.log(err));



app.listen(process.env.PORT,()=>{
    console.log("server is listening on port 3030");
})

app.use('/api/prod/',prodRoute);
app.use('/api/cust/',custRoute);
app.use('/api/service/',servicesRoute);
app.use('/api/auth/',userRoute)
