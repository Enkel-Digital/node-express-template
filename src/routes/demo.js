/**
 * Express Router for routes like
 * Mounted on /
 */

const express = require("express");
const router = express.Router();
const { asyncWrap } = require("express-error-middlewares");

const fs = require("../utils/fs");

/**
 * Demo API to save request body into firestore
 * @name POST /submit
 * @returns Success indicator
 */
router.post(
  "/submit",
  express.json(),
  asyncWrap(async (req, res) => {
    const body = req.body;

    // Example: Save value in new doc with a random key
    await fs.collection("data").add({ body });

    res.status(200).json({ ok: true });
  })
);

module.exports = router;
