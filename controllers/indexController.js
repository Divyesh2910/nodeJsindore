const { catchAsyncErrors } = require("../middleware/catchAsyncErrors");

const Employee = require("../models/employeeModel");
const ErrorHandler = require("../utils/errorHandler");
const { sendmail } = require("../utils/nodeMailer");
const { sendtoken } = require("../utils/sendToken");

exports.homepage = catchAsyncErrors(async function(req, res, next){
        res.json({message: "Secure Homepage"});      
});

exports.currentemployee = catchAsyncErrors(async(req, res, next) =>{
        const employee = await Employee.findById(req.id).exec();

        res.json({employee});
});


exports.employeesignup = catchAsyncErrors(async function(req, res, next){
        const employee = await new Employee(req.body).save(); 
        sendtoken(employee, 201, res);
});

exports.employeesignin = catchAsyncErrors(async function(req, res, next){
        const employee = await Employee.findOne({email: req.body.email})
        .select("+password").exec();

        if(!employee) return next(new ErrorHandler("Employee not found with this email address", 404));

        const isMatch = employee.comparepassword(req.body.password);

        if(!isMatch) return next(new ErrorHandler("Wrong Password", 500));


        sendtoken(employee, 200, res);
});

exports.employeesignout = catchAsyncErrors(async function(req, res, next){
        res.clearCookie("token");
        res.json({message: "Successfully Signout."})
        
});

exports.employeesendmail = catchAsyncErrors(async(req, res, next) => {
        const employee = await Employee.findOne({email: req.body.email}).exec()

        if(!employee) return next(new ErrorHandler("Employee not found with this email address", 404));

        const url = `${req.protocol}://${req.get("host")}/employee/forget-link/${employee._id}`;
        sendmail(req, res,next,url);

        employee.resetPasswordToken = "1";
        await employee.save();

        res.json({employee, url});
});

exports.employeeforgetlink = catchAsyncErrors(async(req, res, next) => {
        const employee = await Employee.findById(req.params.id).exec()

        if(!employee) return next(new ErrorHandler("Employee not found with this email address", 404));

        if(employee.resetPasswordToken == "1"){
                employee.resetPasswordToken = "0";
                employee.password = req.body.password;
                await employee.save();
        }else{
                return next(
                        new ErrorHandler("Invalid Reset password link! Please try again", 500)
                );
        }
        res.status(200).json({
                message: "Password has successfully changed!"
        });
});


exports.employeeresetpassword = catchAsyncErrors(async(req, res, next) => {
        const employee = await Employee.findById(req.id).exec();
        employee.password = req.body.password;
        await employee.save();

        sendtoken(employee, 201, res);
});


