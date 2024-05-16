const { catchAsyncErrors } = require("../middleware/catchAsyncErrors");

const Batch = require("../models/batchModel");


exports.addBatch = catchAsyncErrors(async function(req, res, next){
    const batchh = await new Batch(req.body).save();
    res.status(201).json({batchh});
});







