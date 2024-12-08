const Employee = require("../model/Employee");

exports.deleteEmployee = async(req,res)=>{
   try{
        const {id} = req.params;
        console.log("req.params.id",req.params.id)
        console.log("req.params.id",req.params)

        const resData = await Employee.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"user Successfully delet",
            data:resData
        })
   }catch(error){
    console.log("error while deleting Employee",error)
    res.status(500).json({
        success:false,
        message:"error while deleting error"
    })
   }
}