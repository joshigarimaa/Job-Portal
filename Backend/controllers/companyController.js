const Company = require("../models/companyModel");

const registerCompany = async function (req, res) {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ message: "Company name is required", success: false });
    }
    let company = await Company.findOne({ name });
    if (company) {
      return res
        .status(400)
        .json({ message: "You can't register same company", success: false });
    }
    company = await Company.create({
      name,
      userId: req.userId,
    });
    return res.status(201).json({
      message: "Company registered successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

const getCompany = async function (req, res) {
  try {
    const userId = req.userId;
    const companies = await Company.find({ userId });
    if (companies.length === 0) {
      return res.status(404).json({
        message: "Company not found!",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

const getCompanyById = async function (req, res) {
  try {
    const companyId = req.params.id;

    const company = await Company.findById(companyId); // ✅ FIXED

    if (!company) {
      return res.status(404).json({
        message: "Company not found!",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

const updateCompany = async function (req, res) {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    //idhar cloudinary bdd me

    const updateData = { name, description, website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({
        message: "Company not found!",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information updated!",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

module.exports = { registerCompany, getCompany, getCompanyById, updateCompany };
