const mongoose = require("mongoose");


const jobListing = new mongoose.Schema({
    jobtitle: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const JobList = mongoose.model("joblist", jobListing);

module.exports = JobList;