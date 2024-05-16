const { catchAsyncErrors } = require("../middleware/catchAsyncErrors");

const Course = require("../models/courseScoreModel");


exports.Courses = async (req, res) => {
        const courses = await Course.find();
        res.status(200).json(courses);
};

exports.createCourse = async (req, res) => {
    const {dsa_score, webd_score, react_score} = req.body;
    const newCourse = new Course({ dsa_score, webd_score, react_score });
    await newCourse.save();
    res.status(201).json(newCourse);
};
