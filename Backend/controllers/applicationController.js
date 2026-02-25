const applicationModel = require("../models/applicationModel");
const jobModel = require("../models/jobModel");
const mongoose = require("mongoose");

// ================= APPLY JOB =================
const applyJob = async function (req, res) {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    // Validate jobId
    if (!jobId || !mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({
        message: "Valid Job id is required",
        success: false,
      });
    }

    const existingApplication = await applicationModel.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You've already applied for this job!",
        success: false,
      });
    }

    const jobExists = await jobModel.findById(jobId);

    if (!jobExists) {
      return res.status(404).json({
        message: "Job does not exist",
        success: false,
      });
    }

    const newApplication = await applicationModel.create({
      job: jobId,
      applicant: userId,
      status: "pending",
    });

    // Push application id in job document
    jobExists.application.push(newApplication._id);
    await jobExists.save();

    return res.status(201).json({
      message: "Applied successfully!",
      application: newApplication,
      success: true,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
};

// ================= GET APPLIED JOBS (STUDENT) =================
const getAppliedJob = async function (req, res) {
  try {
    const userId = req.id;

    const application = await applicationModel
      .find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        populate: {
          path: "company",
        },
      });

    if (application.length === 0) {
      return res.status(404).json({
        message: "No applications found",
        success: false,
      });
    }

    return res.status(200).json({
      applications: application,
      success: true,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
};

// ================= GET APPLICANTS FOR A JOB (ADMIN) =================
const getApplicants = async function (req, res) {
  try {
    const jobId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({
        message: "Invalid job id",
        success: false,
      });
    }

    const job = await jobModel.findById(jobId).populate({
      path: "application",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
        select: "name email",
      },
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    if (job.application.length === 0) {
      return res.status(404).json({
        message: "No applications found",
        success: false,
      });
    }

    return res.status(200).json({
      applications: job.application,
      success: true,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
};

// ================= UPDATE APPLICATION STATUS =================
const updateStatus = async function (req, res) {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    const allowedStatus = ["pending", "accepted", "rejected"];

    if (!status) {
      return res.status(400).json({
        message: "Status is required",
        success: false,
      });
    }

    if (!allowedStatus.includes(status.toLowerCase())) {
      return res.status(400).json({
        message: "Invalid status value",
        success: false,
      });
    }

    const application = await applicationModel.findById(applicationId);

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
        success: false,
      });
    }

    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Status updated successfully",
      application: application,
      success: true,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
};

module.exports = {
  applyJob,
  getAppliedJob,
  getApplicants,
  updateStatus,
};
