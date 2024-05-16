const express = require("express");
const router = express.Router();
const { allocationStudentInterview } = require("../controllers/allocationController");
const { isAuthenticated } = require("../middleware/auth");

router.post("/allocate", isAuthenticated, allocationStudentInterview);


module.exports = router;