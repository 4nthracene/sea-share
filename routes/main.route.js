const express = require("express");
const router = express.Router();
const Profile = require("./Profile/profile.route.js");

router.use("/profile", Profile);

module.exports = router;
