const express = require("express");
const app = express();
const cors = require("cors")

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: 'http://localhost:4200', // Frontend का URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // आवश्यक HTTP Methods
    allowedHeaders: ['Content-Type', 'Authorization'] // आवश्यक Headers
  }));

app.use(express.json());

const routing = require("./routes/employeeRoutes")
app.use("/api/v1",routing);

const dbConnection = require("./config/database")
dbConnection();

app.get('/', (req,res)=>{
    res.send("Hello Pratham")
})

app.listen(PORT, ()=>{
    console.log(`app running on port number ${PORT}`)
})

