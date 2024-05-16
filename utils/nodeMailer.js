const nodemailer = require("nodemailer");
const ErrorHandler = require("./errorHandler");

exports.sendmail = (req, res, next, url) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        post: 465,
        auth:{
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailoptions={
        from: "Mxpertz Infolab pvt. ltd.",

        to: req.body.email,
        subject: "Password Reset Link",
        html: `<h1> Click link below to reset password </h1> <a href="${url}">Password Reset Link</a>`
    };
    transport.sendMail(mailoptions, (err, info) => {
        if(err) return next(
            new ErrorHandler(err, 500));
            console.log(info);
            return res.status(200).json({
                message: "mail send successfully",
                url,
            });
    });
}