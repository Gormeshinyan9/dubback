const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      next();
      return;
    }

    const extractedErrors = errors
      .array()
      .map((err) => ({ [err.param]: err.msg }));

    res.status(400).json({ errors: extractedErrors });
  } catch (err) {
    res.status(500).json({ errors: [{ message: err.message }] });
  }
};

module.exports = validate;
