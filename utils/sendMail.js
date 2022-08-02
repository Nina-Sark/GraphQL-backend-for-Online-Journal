require("dotenv").config();
const nodemailer = require("nodemailer");

const sendMail = async ({ email, subject, message }) => {
  const transporter = await nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: email,
    subject,
    html: message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
