require("dotenv").config({path:"./.env"});
const express = require("express");
const app = express();

// database connection
require("./models/database").connectDatabase();

// logger
const logger = require("morgan");
app.use(logger("tiny"));

// bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// session & cookie
const session = require("express-session");
const cookieparser = require("cookie-parser");
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET
}));

app.use(cookieparser());

// routes
app.use("/employee", require("./routes/indexRoutes"));
app.use("/batch", require("./routes/batchRoutes"));
app.use("/student", require("./routes/studentRoutes"));
app.use("/interview", require("./routes/interviewRoutes.js"));
app.use("/course", require("./routes/courseRoutes"));
app.use("/result", require("./routes/resultRoutes"));
app.use("/allocate", require("./routes/allocateRoutes"));
app.use("/job", require("./routes/jobListingRoutes.js"));
app.use("/download", require("./routes/csvDownloadRoutes.js"));

// error handling
const ErrorHandler = require("./utils/errorHandler");

const {generatedErrors} = require("./middleware/error");

app.all("*", function(req, res, next){
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404));
});

app.use(generatedErrors);

app.listen(process.env.PORT, console.log(`server running on port ${process.env.PORT}`));