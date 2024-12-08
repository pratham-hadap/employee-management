const Employee = require("../model/Employee");

exports.createEmployee = async(req,res)=>{
    try{
        const {name, position, dept} = req.body;
        console.log("data",name, position, dept)
        if(!name && !position && !dept){
            res.status(500).json({
                success:false,
                message:"error while creating Employee"
            })
        }

        const response = await Employee.create({name,position,dept});

        res.status(200).json({
            success:true,
            data:response,
            message:"Employee created Successfully"
        })

    }catch(error){
        console.log("error while creating employee",error)
        res.status(500).json({
            success:false,
            message:"error while creating Employee"
        })
    }
}