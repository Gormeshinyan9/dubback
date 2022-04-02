const { mailTransporter } = require("../../utils");
const { MAIL_SENDER_EMAIL } = require("../../config");

const sendSelfMail = async ({ subject, html, attachments }) => {
  const options = {
    html,
    subject,
    attachments,
    to: MAIL_SENDER_EMAIL,
    from: `"" ${MAIL_SENDER_EMAIL}`,
  };

  await mailTransporter.sendMail(options);
};

module.exports = sendSelfMail;
