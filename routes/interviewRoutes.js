const express = require("express");
const router = express.Router();
const { createInterview, Interviewss } = require("../controllers/interviewController");
const { isAuthenticated } = require("../middleware/auth");

router.post("/createInterview", isAuthenticated, createInterview);
router.get("/allInterviews", isAuthenticated, Interviewss);

module.exports = router;