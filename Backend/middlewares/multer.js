const multer = require("multer");

const storage = multer.memoryStorage();

const singleUpload = multer({ storage }).single("resume"); // 👈 FIXED

module.exports = { singleUpload };
