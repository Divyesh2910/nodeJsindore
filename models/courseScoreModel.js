const mongoose = require("mongoose");

const courseScoreModel = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    dsa_score: Number,
    webd_score: Number,
    react_score: Number
    
});

const CourseScore = mongoose.model("courseScore", courseScoreModel);

module.exports = CourseScore;