const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
} = require("../contollers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//Login ||  Post
router.post("/login", loginController);

//Register || Post
router.post("/register", registerController);

//Auth || Post
router.post("/getUserData", authMiddleware, authController);
//Apply Doctor || Post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

module.exports = router;
