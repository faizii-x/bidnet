const express = require("express");
const router = express.Router();
const { newEstimate } = require("../../controllers/front/estimate");

router.post("/new", newEstimate);

module.exports = router;
