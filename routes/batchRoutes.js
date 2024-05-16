const express = require("express");
const router = express.Router();
const {addBatch,
} = require("../controllers/batchController");

const { isAuthenticated } = require("../middleware/auth");


// POST /create-batch
router.post("/add-batch", isAuthenticated, addBatch);



module.exports = router;