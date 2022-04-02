const { mailServices } = require("../../services");
const { MAIL_SENDER_EMAIL } = require("../../config");

const sendInfoMail = async (req, res) => {
  try {
    const { email, name, country, phone, brand, instagram, price } = req.body;
    const images = req.files || [];

    const phoneWithoutSpaces = phone.replace(/\s/g, "");

    const subject = "Info Mail";

    const htmlBody = `
      <p>Name: ${name}</p>
      <p>Phone: <a href="tel:${phoneWithoutSpaces}">${phone}<a/></p>
      <p>Country: ${country}</p>
      <p>Brand: ${brand}</p>
      <p>Instagram: <a href="${instagram}">${instagram}</a></p>
      <p>Price: ${price}</p>
      <p>Email: <a href="mailto:${email}">${email}</a></p>
    `;

    const html = `
      <h1>Order Info</h1>
      ${htmlBody}
    `;

    const clientHTML = `
      <h1>Order Successful</h1>
      ${htmlBody}
    `;

    const attachments = images.map((file) => ({
      content: file,
      filename: file.originalname,
    }));

    await mailServices.sendMail({
      to: MAIL_SENDER_EMAIL,
      html,
      subject,
      attachments,
    });

    await mailServices.sendMail({
      to: email,
      html: clientHTML,
      subject,
      attachments,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ errors: [{ message: err.message }] });
  }
};

module.exports = sendInfoMail;
