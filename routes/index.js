const express = require("express");
const passport = require("passport");
const router = express.Router();

/* GET home page. */

router.get("", (req, res) => {
  res.send(
    req.user ||
      `<a href="${process.env.BASE_URL}/api/auth/steam">Sign in</a>
  `
  );
});
router.get(
  "/api/auth/steam",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);
router.get(
  "/api/auth/steam/return",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = router;
