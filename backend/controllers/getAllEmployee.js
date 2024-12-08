
const Employee = require("../model/Employee");

exports.getAllEmployee = async(req,res)=>{
    try{
        allEmployee = await Employee.find({})

        res.status(200).json({
            success:true,
            message:"Successfully Fetch All Employee",
            data:allEmployee
        })
    }catch(error){
        console.log("error while getting all Employee",error)
        res.status(500).json({
            success:false,
            message:"error while getting all employee"
        })
    }
}


exports.getEmployeeById = async(req,res)=>{
    try{

        const {id} = req.params
        specificEmployee = await Employee.findById(id)

        res.status(200).json({
            success:true,
            message:`Successfully Fetch Employee by this ${id} `,
            data:specificEmployee
        })
    }catch(error){
        console.log("error while getting specific Employee by id",error)
        res.status(500).json({
            success:false,
            message:"error while getting specific Employee by id"
        })
    }
}