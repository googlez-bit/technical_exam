const express = require("express");
const { registerUser } = require("../controllers/main-controller");
const upload = require("../middleware/image-upload");

const router = express.Router();

router.post("/register", upload.single("profile_picture"), registerUser);

module.exports = router;