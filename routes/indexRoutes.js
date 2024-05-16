const express = require("express");
const router = express.Router();
const {homepage,
    currentemployee,
    employeesignup,
    employeesignin,
    employeesignout,
    employeesendmail,
    employeeforgetlink,
    employeeresetpassword,
} = require("../controllers/indexController");

const { isAuthenticated } = require("../middleware/auth");

// GET /
router.get("/", homepage);

// POST /employee
router.post("/employee", isAuthenticated, currentemployee);

// POST /employee/signup
router.post("/employee/signup", employeesignup);

// POST /employee/signin
router.post("/employee/signin",  employeesignin);

// GET /employee/signout
router.get("/employee/signout", isAuthenticated, employeesignout);

// POST /employee/send-mail
router.post("/employee/send-mail", employeesendmail);

// GET /employee/forget-link/:employeeid
router.get("/employee/forget-link/:id", employeeforgetlink);

// POST /employee/reset-password/:employeeid
router.post("/employee/reset-password/:id", isAuthenticated, employeeresetpassword);


module.exports = router;