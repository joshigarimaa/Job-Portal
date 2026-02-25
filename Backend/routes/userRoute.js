const express = require("express");
const {
  signup,
  login,
  logout,
  update,
} = require("../controllers/userController");

const isAuthenticated = require("../middlewares/isAuthenticated");
const { singleUpload } = require("../middlewares/multer");

const router = express.Router();

// existing routes
router.route("/signup").post(singleUpload, signup);
router.route("/login").post(login);
router.route("/logout").post(logout);

// ✅ FIXED ROUTE — exactly frontend ke according
router.post("/profile/update", isAuthenticated, singleUpload, update);

module.exports = router;
