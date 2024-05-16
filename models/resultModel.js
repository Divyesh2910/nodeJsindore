const mongoose = require("mongoose");

const resultModel = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    interview_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Interview'},
    company_name: String,
    result: { type: String, enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt'] }
    
});

const Result = mongoose.model("result", resultModel);

module.exports = Result;



