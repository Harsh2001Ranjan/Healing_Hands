const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailbilityController,
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
//Notification Doctor || Post
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notification Doctor || Post
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookAppointmentController);

//Booking Availibility
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailbilityController
);
module.exports = router;
