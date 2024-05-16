const mongoose = require("mongoose");


const interviewModel = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    interview_company: String,
    interview_date: Date,  
});

const Interview = mongoose.model("interview", interviewModel);

module.exports = Interview;