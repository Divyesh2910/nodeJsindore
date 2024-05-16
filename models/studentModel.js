const mongoose = require("mongoose");


const studentModel = new mongoose.Schema({
    batch_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch' },
    student_name: String,
    student_college: String,
    student_status: { type: String, enum: ['placed', 'not_placed'] }
});

const Student = mongoose.model("student", studentModel);

module.exports = Student;