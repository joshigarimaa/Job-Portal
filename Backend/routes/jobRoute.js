const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const {
  postJob,
  getAllJob,
  getAdminJobs,
  getJobById,
} = require("../controllers/jobController");
const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJob);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);

module.exports = router;
