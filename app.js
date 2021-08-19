require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { APP_NAME } = process.env;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const coursesRouter = require("./routes/courses");
const mediaRouter = require("./routes/media");
const ordersRouter = require("./routes/ordersPayment");
const orderPaymentRouter = require("./routes/ordersPayment");
const refreshTokensRouter = require("./routes/refreshTokens");
const mentorRouter = require("./routes/mentors");
const chapterRouter = require("./routes/chapters");
const lessionsRouter = require("./routes/lessions");
const imageCoursesRouter = require("./routes/imageCourses");
const myCoursesRouter = require("./routes/myCourses");
const reviewsRouter = require("./routes/reviews");
const webhookRouter = require("./routes/webhook");
const cors = require("cors");

const verifyToken = require("./middleware/verifyToken");
const can = require("./middleware/permission");

const app = express();

// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }

// var allowlist = ["http:localhost:3000"];
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (allowlist.indexOf(req.header("Origin")) !== -1) {
//     corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false }; // disable CORS for this request
//   }
//   callback(null, corsOptions); // callback expects two parameters: error and options
// };

// app.use();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/courses", cors(), coursesRouter);
app.use("/media", verifyToken, can("admin", "student"), mediaRouter);
app.use("/orderss", ordersRouter);
app.use("/orders", verifyToken, can("admin", "student"), orderPaymentRouter);
app.use("/refresh-tokens", refreshTokensRouter);
app.use("/mentors", verifyToken, can("admin"), mentorRouter);
app.use("/chapters", verifyToken, can("admin"), chapterRouter);
app.use("/lessions", verifyToken, can("admin"), lessionsRouter);
app.use("/image-courses", verifyToken, can("admin"), imageCoursesRouter);
app.use("/my-courses", verifyToken, can("admin", "student"), myCoursesRouter);
app.use("/reviews", verifyToken, can("admin", "student"), reviewsRouter);
app.use("/webhook", webhookRouter);

module.exports = app;
