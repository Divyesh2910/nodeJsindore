const JobListing = require('../models/jobListingModel');
const Axios = require("axios");

exports.getAllStudentsForInterview = async (req, res, next) => {
    const response = await Axios.get('https://linkedin-data-api.p.rapidapi.com/get-company-details');

    
    const jobsData = response.data;
    
    const jobListings = jobsData.map(job => {
        return new JobListing(job.title, job.company, job.url);
    });

    
    res.status(200).json(jobListings);

};






