const nodemailer=require('nodemailer');
require('dotenv').config();
const transporter=nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASSWORD
    }
})

module.exports=transporter;