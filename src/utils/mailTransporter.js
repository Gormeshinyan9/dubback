const { createTransport } = require("nodemailer");

const { MAIL_SENDER_EMAIL, MAIL_SENDER_PASS } = require("../config");

const mailTransporter = createTransport({
  service: "gmail",
  auth: {
    user: MAIL_SENDER_EMAIL,
    pass: MAIL_SENDER_PASS,
  },
});

module.exports = mailTransporter;
