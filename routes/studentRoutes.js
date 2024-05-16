const express = require("express");
const router = express.Router();
const {addStudent, getAllStudents,
} = require("../controllers/studentController");

const { isAuthenticated } = require("../middleware/auth");


// POST /create-student
router.post("/add-student", addStudent);

// GET /students
router.get("/students", getAllStudents);



module.exports = router;