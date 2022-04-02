const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({}),
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: (_req, file, cb) => {
    const acceptedFileTypes = ["image/jpeg", "image/png"];
    const isCorrectType = acceptedFileTypes.includes(file.mimetype);

    cb(null, isCorrectType);
  },
});

module.exports = upload;
