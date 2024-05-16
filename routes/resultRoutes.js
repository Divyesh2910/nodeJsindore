const express = require("express");
const router = express.Router();

const { markResult, downloadCSV} = require("../controllers/resultController");
const { isAuthenticated } = require("../middleware/auth");

router.post('/:interview_id/:student_id/mark-result', markResult);



module.exports = router;