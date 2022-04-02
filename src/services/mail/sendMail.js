const { mailTransporter } = require("../../utils");
const { MAIL_SENDER_EMAIL } = require("../../config");

const sendMail = async ({ to, subject, html, attachments }) => {
  const options = {
    to,
    html,
    subject,
    attachments,
    from: `"" ${MAIL_SENDER_EMAIL}`,
  };

  await mailTransporter.sendMail(options);
};

module.exports = sendMail;
