const fs = require("fs");
const json2csv = require("json2csv").parse;
const Student = require("../models/studentModel")

exports.downloadCsv = async (req, res, next) =>{
    const students = await Student.find({},"batch_name batch_id student_name student_college student_status student_id dsa_score webd_score react_score interview_company interview_date interview_id result");

    const fields = ["batch_name", "batch_id", "student_name", "student_college", "student_status", "student_id", "dsa_score", "webd_score", "react_score", "interview_company", "interview_date", "interview_id", "result"];

    const csv = json2csv(students, {fields});

    const fileName = "studentInfo.csv";
    res.setHeader("content-disposition", `attachment; filename = ${fileName}`);
    res.set("content-Type", "text/csv");
    res.send(csv);
    console.log(csv);
}

// const csv = parse(data, {fields: ["batch_name", "batch_id", "student_name", "student_college", "student_status", "student_id", "dsa_score", "webd_score", "react_score", "interview_company", "interview_date", "interview_id", "result"]});


