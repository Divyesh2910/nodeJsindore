const { catchAsyncErrors } = require("../middleware/catchAsyncErrors");
const Result = require("../models/resultModel");


exports.markResult = async (req, res) => {
    // const { interview_id, student_id } = req.params;
    const { interview_id, student_id, result } = req.body;

    const updatedResult = await Result.findOne({ 
        interview: interview_id, 
        student: student_id });

    if(updatedResult){
        updatedResult.result = result;
        await updatedResult.save();
        res.status(200).json({updatedResult, message: "result updated successfully"});
    }else{
        const newResult = new Result({student: student_id, interview: interview_id, result});
        await newResult.save();
        res.json({message: "Result marked successfully", newResult});
    }

};





