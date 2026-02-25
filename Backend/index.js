const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./utils/db");
const userRoute = require("./routes/userRoute");
const companyRoute = require("./routes/companyRoute");
const jobRoute = require("./routes/jobRoute");
const applicationRoute=require("./routes/applicationRoute")
dotenv.config();

const app = express();

// DB CONNECTION
db();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOption)); // FIXED ORDER
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Hey Shubhi!");
});

// SERVER LISTEN
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running!");
});
 