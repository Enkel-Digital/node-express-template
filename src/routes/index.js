/** @notice Parent router where all other routers are mounted onto. */
const express = require("express");
const router = express.Router();

const firebaseAdmin = require("@enkeldigital/firebase-admin");
const authMiddleware = require("firebase-auth-express-middleware")(
  firebaseAdmin
);

// Mount all the routes onto their respective base routes
router.use("/", require("./default"));
router.use("/", authMiddleware, require("./demo"));

module.exports = router;
