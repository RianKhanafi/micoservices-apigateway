const express = require("express");
const router = express.Router();

const orderPaymentHandler = require("./handler/order-payment");

router.get("/", orderPaymentHandler.getOrders);

module.exports = router;
