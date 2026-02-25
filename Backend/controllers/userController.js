// const bcrypt = require("bcrypt");
// const userSchema = require("../models/userModel");
// const jwt = require("jsonwebtoken");
// const { getDataUri } = require("../utils/dataUri");
// const cloudinary = require("../utils/cloudinary");

// // ================= SIGNUP =================
// const signup = async function (req, res) {
//   try {
//     const { fullname, email, phoneNumber, password, role } = req.body;

//     if (!fullname || !email || !phoneNumber || !password || !role) {
//       return res.status(400).json({ message: "Enter complete details" });
//     }

//     const isEmailExists = await userSchema.findOne({ email });
//     if (isEmailExists) {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const userCreated = await userSchema.create({
//       fullname,
//       email,
//       phoneNumber,
//       password: hashedPassword,
//       role,
//     });

//     return res.status(201).json({
//       message: "User registered successfully",
//       success: true,
//       user: {
//         _id: userCreated._id,
//         fullname: userCreated.fullname,
//         email: userCreated.email,
//         phoneNumber: userCreated.phoneNumber,
//         role: userCreated.role,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// // ================= LOGIN =================
// const login = async function (req, res) {
//   try {
//     const { email, password, role } = req.body;

//     if (!email || !password || !role) {
//       return res.status(400).json({ message: "Enter complete details" });
//     }

//     const isEmailExists = await userSchema.findOne({ email });
//     if (!isEmailExists) {
//       return res.status(401).json({ message: "Invalid credentials!" });
//     }

//     if (isEmailExists.role !== role) {
//       return res.status(401).json({ message: "Invalid credentials!" });
//     }

//     const comparePassword = await bcrypt.compare(
//       password,
//       isEmailExists.password,
//     );

//     if (!comparePassword) {
//       return res.status(401).json({ message: "Invalid credentials!" });
//     }

//     if (!process.env.SECRETKEY) {
//       throw new Error("JWT Secret Key Missing");
//     }

//     const tokenData = { userId: isEmailExists._id };

//     const token = jwt.sign(tokenData, process.env.SECRETKEY, {
//       expiresIn: "1d",
//     });

//     return res
//       .cookie("token", token, {
//         maxAge: 1 * 24 * 60 * 60 * 1000,
//         httpOnly: true,
//         sameSite: "strict",
//       })
//       .status(200)
//       .json({
//         message: `Welcome back ${isEmailExists.fullname}`,
//         success: true,
//         user: {
//           _id: isEmailExists._id,
//           fullname: isEmailExists.fullname,
//           email: isEmailExists.email,
//           role: isEmailExists.role,
//         },
//         token,
//       });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// // ================= LOGOUT =================
// const logout = async function (req, res) {
//   try {
//     return res
//       .status(200)
//       .cookie("token", "", { maxAge: 0 })
//       .json({ message: "Logged out successfully" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// // ================= UPDATE PROFILE =================
// // const update = async function (req, res) {
// //   try {
// //     const { fullname, email, phoneNumber, bio, skills } = req.body;
// //     const file = req.file;

// //     const skillsArr = skills ? skills.split(",") : [];

// //     const userId = req.userId;

// //     let user = await userSchema.findById(userId);

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found!" });
// //     }

// //     // ensure profile exists
// //     if (!user.profile) {
// //       user.profile = {};
// //     }

// //     // SAFE UPDATE (no overwrite)
// //     if (fullname) user.fullname = fullname;
// //     if (email) user.email = email;
// //     if (phoneNumber) user.phoneNumber = phoneNumber;
// //     if (bio) user.profile.bio = bio;
// //     if (skills) user.profile.skills = skillsArr;

// //     await user.save();

// //     return res.status(200).json({
// //       message: "Profile updated successfully",
// //       user: {
// //         _id: user._id,
// //         fullname: user.fullname,
// //         email: user.email,
// //         phoneNumber: user.phoneNumber,
// //         profile: user.profile,
// //         role: user.role,
// //       },
// //     });
// //   } catch (error) {
// //     console.log(error);
// //     return res.status(500).json({ message: "Server error" });
// //   }
// // };

// // const update = async function (req, res) {
// //   try {
// //     console.log("BODY:", req.body);
// //     console.log("FILE:", req.file);
// //     console.log("USER ID:", req.userId);

// //     const { fullname, email, phoneNumber, bio, skills } = req.body;
// //     const file = req.file;
// //     const fileUri = getDataUri(file);
// //     const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
// //     console.log("CLOUDINARY RESPONSE:", cloudResponse);

// //     let skillsArr = [];

// //     if (skills) {
// //       try {
// //         skillsArr = JSON.parse(skills);
// //       } catch (err) {
// //         skillsArr = skills.split(",");
// //       }
// //     }

// //     const userId = req.userId;

// //     if (!userId) {
// //       return res.status(401).json({ message: "User not authenticated" });
// //     }

// //     let user = await userSchema.findById(userId);

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found!" });
// //     }

// //     if (!user.profile) {
// //       user.profile = {};
// //     }

// //     if (fullname) user.fullname = fullname;
// //     if (email) user.email = email;
// //     if (phoneNumber) user.phoneNumber = phoneNumber;
// //     if (bio) user.profile.bio = bio;
// //     if (skills) user.profile.skills = skillsArr;

// //     if (file) {
// //       user.profile.resume = file.originalname;
// //     }
// //     if (cloudResponse && cloudResponse.secure_url) {
// //       user.profile.resume = cloudResponse.secure_url;
// //       user.profile.resumeOriginalName = file.originalname;

// //     }

// //     await user.save();

// //     return res.status(200).json({
// //       message: "Profile updated successfully",
// //       user: {
// //         _id: user._id,
// //         fullname: user.fullname,
// //         email: user.email,
// //         phoneNumber: user.phoneNumber,
// //         profile: user.profile,
// //         role: user.role,
// //       },
// //     });
// //   } catch (error) {
// //     console.log("UPDATE ERROR:", error);

// //     return res.status(500).json({
// //       message: "Server error",
// //       error: error.message,
// //     });
// //   }
// // };

// const update = async function (req, res) {
//   try {
//     console.log("BODY:", req.body);
//     console.log("FILE:", req.file);
//     console.log("USER ID:", req.userId);

//     const { fullname, email, phoneNumber, bio, skills } = req.body;
//     const file = req.file;

//     let cloudResponse = null; // ✅ prevent undefined

//     // ✅ Upload only if file exists
//     if (file) {
//       const fileUri = getDataUri(file);
//       cloudResponse = await cloudinary.uploader.upload(fileUri.content);
//       console.log("CLOUDINARY RESPONSE:", cloudResponse);
//     }

//     let skillsArr = [];

//     if (skills) {
//       try {
//         skillsArr = JSON.parse(skills);
//       } catch (err) {
//         skillsArr = skills.split(",");
//       }
//     }

//     const userId = req.userId;

//     if (!userId) {
//       return res.status(401).json({ message: "User not authenticated" });
//     }

//     let user = await userSchema.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found!" });
//     }

//     if (!user.profile) {
//       user.profile = {};
//     }

//     if (fullname) user.fullname = fullname;
//     if (email) user.email = email;
//     if (phoneNumber) user.phoneNumber = phoneNumber;
//     if (bio) user.profile.bio = bio;
//     if (skills) user.profile.skills = skillsArr;

//     if (file) {
//       user.profile.resume = file.originalname;
//     }

//     if (cloudResponse && cloudResponse.secure_url) {
//       user.profile.resume = cloudResponse.secure_url;
//       user.profile.resumeOriginalName = file.originalname;
//     }

//     await user.save();

//     return res.status(200).json({
//       message: "Profile updated successfully",
//       user: {
//         _id: user._id,
//         fullname: user.fullname,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//         profile: user.profile,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     console.log("UPDATE ERROR:", error);

//     return res.status(500).json({
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// module.exports = { signup, login, logout, update };

const bcrypt = require("bcrypt");
const userSchema = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { getDataUri } = require("../utils/dataUri");
const cloudinary = require("../utils/cloudinary");

// ================= SIGNUP =================
// const signup = async function (req, res) {
//   try {
//     const { fullname, email, phoneNumber, password, role } = req.body;

//     if (!fullname || !email || !phoneNumber || !password || !role) {
//       return res.status(400).json({ message: "Enter complete details" });
//     }
//     const file = req.file;
//     const fileUri = getDataUri(file);
//     const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
//     console.log(cloudResponse);

//     const isEmailExists = await userSchema.findOne({ email });
//     if (isEmailExists) {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const userCreated = await userSchema.create({
//       fullname,
//       email,
//       phoneNumber,
//       password: hashedPassword,
//       role,
//       profile: {
//         profilePhoto: cloudResponse.secure_url,
//       },
//     });

//     return res.status(201).json({
//       message: "User registered successfully",
//       success: true,
//       user: {
//         _id: userCreated._id,
//         fullname: userCreated.fullname,
//         email: userCreated.email,
//         phoneNumber: userCreated.phoneNumber,
//         role: userCreated.role,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

const signup = async function (req, res) {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;

    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({ message: "Enter complete details" });
    }

    const file = req.file;
    let cloudResponse = null;

    // ✅ Only upload if file exists
    if (file) {
      const fileUri = getDataUri(file);
      cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: "image",
      });
      console.log(cloudResponse);
    }

    const isEmailExists = await userSchema.findOne({ email });
    if (isEmailExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userCreated = await userSchema.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: cloudResponse ? cloudResponse.secure_url : "",
      },
    });

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
      user: {
        _id: userCreated._id,
        fullname: userCreated.fullname,
        email: userCreated.email,
        phoneNumber: userCreated.phoneNumber,
        role: userCreated.role,
      },
    });
   } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// ================= LOGIN =================
const login = async function (req, res) {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ message: "Enter complete details" });
    }

    const isEmailExists = await userSchema.findOne({ email });
    if (!isEmailExists) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    // ✅ BUG FIXED HERE (case-insensitive comparison)
    if (isEmailExists.role.toLowerCase() !== role.toLowerCase()) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    const comparePassword = await bcrypt.compare(
      password,
      isEmailExists.password,
    );

    if (!comparePassword) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    if (!process.env.SECRETKEY) {
      throw new Error("JWT Secret Key Missing");
    }

    const tokenData = { userId: isEmailExists._id };

    const token = jwt.sign(tokenData, process.env.SECRETKEY, {
      expiresIn: "1d",
    });

    return res
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .status(200)
      .json({
        message: `Welcome back ${isEmailExists.fullname}`,
        success: true,
        user: {
          _id: isEmailExists._id,
          fullname: isEmailExists.fullname,
          email: isEmailExists.email,
          role: isEmailExists.role,
        },
        token,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// ================= LOGOUT =================
const logout = async function (req, res) {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// ================= UPDATE PROFILE =================
const update = async function (req, res) {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    console.log("USER ID:", req.userId);

    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    let cloudResponse = null;

    if (file) {
      const fileUri = getDataUri(file);
      cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: "raw",
      });

      console.log("CLOUDINARY RESPONSE:", cloudResponse);
    }

    let skillsArr = [];

    if (skills) {
      try {
        skillsArr = JSON.parse(skills);
      } catch (err) {
        skillsArr = skills.split(",");
      }
    }

    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    let user = await userSchema.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (!user.profile) {
      user.profile = {};
    }

    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArr;

    if (file) {
      user.profile.resume = file.originalname;
    }

    if (cloudResponse && cloudResponse.secure_url) {
      user.profile.resume = cloudResponse.secure_url;
      user.profile.resumeOriginalName = file.originalname;
    }

    await user.save();

    return res.status(200).json({
      message: "Profile updated successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        profile: user.profile,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("UPDATE ERROR:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { signup, login, logout, update };
