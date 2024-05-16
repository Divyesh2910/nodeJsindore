const { catchAsyncErrors } = require("../middleware/catchAsyncErrors");

const Interview = require("../models/interviewModel");

exports.createInterview = catchAsyncErrors(async function(req, res, next){
    const {student_id, interview_company, interview_date} = req.body;

    const newInterview = new Interview({student_id, interview_company, interview_date});
    await newInterview.save();
    res.status(201).json(newInterview);
});





exports.Interviewss = async (req, res) => {
        const interviews = await Interview.find();
        res.status(200).json(interviews);
};





