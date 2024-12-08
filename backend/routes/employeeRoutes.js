const express = require("express");
const router = express.Router()

const {createEmployee} = require("../controllers/createEmployee");
const {getAllEmployee, getEmployeeById} = require("../controllers/getAllEmployee")
const {deleteEmployee} = require("../controllers/deleteEmployee")
const {updateEmployee} = require("../controllers/updateEmployee")

router.post("/create-employee",createEmployee);
router.get("/get-employee",getAllEmployee)
router.get("/get-employee-ById/:id",getEmployeeById)
router.delete("/delete-employee/:id",deleteEmployee)
router.put("/update-employee/:id",updateEmployee)

module.exports = router