const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getDoctorInfoController } = require("../contollers/doctorCtrl");

const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

module.exports = router;
