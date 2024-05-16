const express = require("express");
const router = express.Router();
const { createCourse, Courses } = require("../controllers/courseController");
const { isAuthenticated } = require("../middleware/auth");

router.post("/createCourse", isAuthenticated, createCourse);
router.get("/allCourses", isAuthenticated, Courses);

module.exports = router;