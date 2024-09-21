const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const empController = require("./../controllers/empController");

router.route("/signup").post(authController.signup);

router.route("/signin").post(authController.signin);

router.route("/addEmp").post(empController.addEmp);

router.route("/findEmp").post(empController.findEmp);

module.exports = router;
