const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    is_success: true,
    official_email:"amandeep0021.be23@chitkara.edu.in"
  });
});

module.exports = router;
