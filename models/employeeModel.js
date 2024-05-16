const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const employeeModel = new mongoose.Schema({
    
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required!"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please fill a valid email address."],
    },
    password: {
        type: String,
        select: false,
        maxLength: [15, "Password should not exceed more the 15 characters."],
        minLength: [5, "Password should have atleast 6 characters."],
        // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/, "Please fill a valid password"]
    },resetPasswordToken: {
        type: String,
        default: "0",
    },

},{timestamps: true});



// Hash Password
employeeModel.pre("save", function(){
    if(!this.isModified("password")){
        return;
    };


    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
});

employeeModel.methods.comparepassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

employeeModel.methods.getjwttoken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
}

const Employee = mongoose.model("employee", employeeModel);

module.exports = Employee;