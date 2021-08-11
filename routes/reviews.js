const express = require("express");
const router = express.Router();

const reviewsHandle = require("./handler/reviews");

router.post("/", reviewsHandle.create);
router.put("/:id", reviewsHandle.update);
router.delete("/:id", reviewsHandle.destroy);

module.exports = router;
