const express = require("express");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

const usersHandler = require("./handler/users");

router.post("/register", usersHandler.register);
router.post("/login", usersHandler.login);
router.put("/", verifyToken, usersHandler.update);
router.get("/", verifyToken, usersHandler.getUser);
router.post("/logout", verifyToken, usersHandler.logout);

module.exports = router;
