const express = require("express");
const router = express.Router();
const {getAllStudentsForInterview } = require("../controllers/jobListingController");
// const { isAuthenticated } = require("../middleware/auth");


router.get('/job-listing', getAllStudentsForInterview);

module.exports = router;