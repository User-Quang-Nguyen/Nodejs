var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("test.ejs");
});
router.use("/admin", require(__dirname + "/admin.js"));
router.use("/blog", require(__dirname + "/blog.js"));

module.exports = router;