const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authentication");
const testUserAuth = require("../middleware/testUser");
const { register, login, updateUser } = require("../controllers/auth");
const rateLimiter = require("express-rate-limit");
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: {
    msg: "Too many request from Here, try after 15 min",
  },
});

router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);
router.patch("/updateUser", authenticateUser, testUserAuth, updateUser);

module.exports = router;
