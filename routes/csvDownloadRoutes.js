const express = require("express");
const router = express.Router();
const {downloadCsv} = require("../controllers/csvFileController");
const { isAuthenticated } = require("../middleware/auth");


router.get('/student-detail', isAuthenticated, downloadCsv);

module.exports = router;