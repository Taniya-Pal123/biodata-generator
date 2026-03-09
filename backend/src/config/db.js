const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("MongoDB connected");
        
    })
    .catch((err)=>{
        console.log("MongoDb connection error:",err);
        
    })
}

module.exports = connectDB;