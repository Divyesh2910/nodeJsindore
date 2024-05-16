const mongoose = require("mongoose");

const allocationModel = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    interview_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Interview'},  
});

const Allocate = mongoose.model("allocate", allocationModel);

module.exports = Allocate;