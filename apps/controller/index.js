var router = express.Router();
var rt = require("express");

router.use("/admin", require(__dirname + "/admin.js"));
router.use("/blog", require(__dirname + "/blog.js"));

router.get("/", function (req, res) {
    res.render("test.ejs");
});

module.exports = router;