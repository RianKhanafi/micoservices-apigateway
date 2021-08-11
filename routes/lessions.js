const express = require("express");
const router = express.Router();

const lessionsHandler = require("./handler/lessions");

router.get("/", lessionsHandler.getAll);
router.get("/:id", lessionsHandler.get);

router.post("/", lessionsHandler.create);
router.put("/:id", lessionsHandler.update);
router.delete("/:id", lessionsHandler.destroy);

module.exports = router;
