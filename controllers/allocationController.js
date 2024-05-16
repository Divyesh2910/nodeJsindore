const { catchAsyncErrors } = require("../middleware/catchAsyncErrors");

const mongoose = require("mongoose");
const Allocation = require("../models/allocationModel");
const Interview = require("../models/interviewModel");

function generateInterviewId(){
    return new mongoose.Types.ObjectId();
}

exports.allocationStudentInterview = catchAsyncErrors(async function(req, res, next){
    const {student_id} = req.body;

    const interview_id = generateInterviewId();
    console.log(interview_id);

    const newAllocation = new Allocation({student: student_id, interview: interview_id});
    await newAllocation.save();
    res.status(201).json({newAllocation, interview_id});
});





exports.Interviewss = async (req, res) => {
        const interviews = await Interview.find();
        res.status(200).json(interviews);
};





