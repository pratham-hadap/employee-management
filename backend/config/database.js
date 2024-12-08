const mongoose = require("mongoose");


const dbConnection = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    
    .then(()=>{
        console.log("DB Connection Is Successful")
    })
    .catch((error)=>{
        console.log("Error In DB Connectiion")
        console.log(error)
    })
}

module.exports = dbConnection