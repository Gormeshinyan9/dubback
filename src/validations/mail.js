const { body } = require("express-validator");

exports.sendInfoMail = [
  body("name").exists().trim(),
  body("phone").exists().trim(),
  body("country").exists().trim(),
  body("brand").exists().trim(),
  body("instagram").exists().trim(),
  body("price").exists().trim(),
  body("email").exists().trim().bail().isEmail(),
];
