const mongoose = require("mongoose");

const batchModel = new mongoose.Schema({
    batch_name: String
    
});

const Batch = mongoose.model("batch", batchModel);

module.exports = Batch;