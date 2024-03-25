const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorIdController,
} = require("../contollers/doctorCtrl");

const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST GET SINGLE DOC INFO
router.post("/getDoctorById", authMiddleware, getDoctorIdController);
module.exports = router;
