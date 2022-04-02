const { Router } = require("express");

const { validate, upload } = require("../middleware");
const { mailControllers } = require("../controllers");
const { mailValidations } = require("../validations");

const router = Router();

router.post(
  "/info",
  upload.array("picture", 5),
  mailValidations.sendInfoMail,
  validate,
  mailControllers.sendInfoMail
);

module.exports = router;
