const { catchAsyncErrors } = require("../middleware/catchAsyncErrors");

const Student = require("../models/studentModel");


exports.addStudent = catchAsyncErrors(async function(req, res, next){
    const {student_name, student_college, student_status} = req.body;

    const newStudent = new Student({student_name, student_college, student_status});
    await newStudent.save();
    res.status(201).json(newStudent);
});

exports.getAllStudents = catchAsyncErrors(async function(req, res, next){
    const students = await Student.find();
    res.status(200).json(students);
});





