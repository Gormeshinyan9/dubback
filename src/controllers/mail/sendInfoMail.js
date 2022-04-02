const { mailServices } = require("../../services");

const sendInfoMail = async (req, res) => {
  try {
    const { email, name, country, phone, brand, instagram, price } = req.body;
    const images = req.files || [];

    const phoneWithoutSpaces = phone.replace(/\s/g, "");

    const subject = "Info Mail";

    const html = `
      <h1>Info</h1>
      <p>Name: ${name}</p>
      <p>Phone: <a href="tel:${phoneWithoutSpaces}">${phone}<a/></p>
      <p>Country: ${country}</p>
      <p>Brand: ${brand}</p>
      <p>Instagram: <a href="${instagram}">${instagram}</a></p>
      <p>Price: ${price}</p>
      <p>Email: <a href="mailto:${email}">${email}</a></p>
    `;

    const attachments = images.map((file) => ({
      content: file,
      filename: file.originalname,
    }));

    await mailServices.sendSelfMail({
      html,
      subject,
      attachments,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ errors: [{ message: err.message }] });
  }
};

module.exports = sendInfoMail;
