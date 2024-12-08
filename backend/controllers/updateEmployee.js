const Employee = require("../model/Employee");

exports.updateEmployee = async(req,res)=>{
    try{
        const {id} = req.params;
        const{name, position, dept} = req.body;
        const resData = await Employee.findByIdAndUpdate(
            id,
            {name,position,dept},
            {new:true}// Return the updated document
        )
        
        res.status(200).json({
            success:true,
            message:"employee data updated successfully",
            data: resData
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:" error while updating employee "
        })
    }
}