const Job = require("../models/jobModel");

// STUDENT
const postJob = async function (req, res) {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experienceLevel,
      position,
      companyId,
    } = req.body;

    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experienceLevel ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Enter complete details",
        success: false,
      });
    }

    const createJob = await Job.create({
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experienceLevel,
      position,
      company: companyId,
      createdByUser: userId,
    });

    return res.status(201).json({
      message: "New job created successfully!",
      job: createJob,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
};

const getAllJob = async function (req, res) {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const findJobs = await Job.find(query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });
    if (findJobs.length === 0) {
      return res.status(404).json({
        message: "Job not found!",
        success: false,
      });
    }
    return res.status(200).json({
      jobs: findJobs,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
};

const getJobById = async function (req, res) {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId).populate({ path: "company" }); // ✅ added

    if (!job) {
      return res.status(404).json({
        // ✅ fixed
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({
      job: job,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
};

// ADMIN
const getAdminJobs = async function (req, res) {
  try {
    const adminId = req.id;

    const jobs = await Job.find({ createdByUser: adminId });

    if (jobs.length === 0) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({
      jobs: jobs,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
      success: false,
    });
  }
};

module.exports = { postJob, getAllJob, getJobById, getAdminJobs };
