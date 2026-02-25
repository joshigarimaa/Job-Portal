const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");

const {
  applyJob,
  getAppliedJob,
  getApplicants,
  updateStatus,
} = require("../controllers/applicationController");

const router = express.Router();

// Student routes
router.route("/apply/:id").post(isAuthenticated, applyJob); // apply job
router.route("/get").get(isAuthenticated, getAppliedJob); // my applied jobs

// Admin routes
router.route("/:id/applicants").get(isAuthenticated, getApplicants); // applicants of a job
router.route("/status/:id/update").put(isAuthenticated, updateStatus); // update status

module.exports = router;
